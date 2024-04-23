import { CarProps, FilterProps, PaintData } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.5; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg / mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = async (
  car: CarProps,
  angle?: string,
  paintId?: string | null,
  paintDescription?: string | null
) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  const randomColor =
    paintId && paintDescription
      ? { paintId, paintDescription }
      : await getRandomColor(
          make,
          model.split(" ")[0],
          process.env.NEXT_PUBLIC_IMAGIN_API_KEY || "",
          year
        );
  if (!randomColor) {
    console.error("Failed to get random color.");
    return null;
  }

  const {
    paintId: extractedPaintId,
    paintDescription: extractedPaintDescription,
  } = randomColor;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("paintid", `${extractedPaintId}`);
  url.searchParams.append("paintdescription", `${extractedPaintDescription}`);

  return `${url}`;
};

const getRandomColor = async (
  make: string,
  modelFamily: string,
  customerId: string,
  year: number
) => {
  try {
    // Make the API call to fetch available paints with specific car details
    const response = await fetch(
      `https://cdn.imagin.studio/getPaints?&customer=${customerId}&target=car&make=${make}&modelFamily=${modelFamily}&year=${year}`
    );
    const data: PaintData = await response.json();
    // Check if paint data is available
    if (!data || !data.paintData.paintCombinations) {
      console.error("No paint data available.");
      return null;
    }

    const paintCombinations = data.paintData.paintCombinations;

    // Extract available colors
    const availableColors: { paintId: string; paintDescription: string }[] = [];
    for (const combinationKey in paintCombinations) {
      const mapped = paintCombinations[combinationKey].mapped;
      for (const paintKey in mapped) {
        availableColors.push({
          paintId: paintKey,
          paintDescription: mapped[paintKey].paintDescription,
        });
      }
    }

    // Randomly choose a color from available colors
    if (availableColors.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      return availableColors[randomIndex];
    } else {
      console.error("No available colors found.");
      return null;
    }
  } catch (error) {
    console.error("Error fetching paint data:", error);
    return null;
  }
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
