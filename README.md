<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<div align="center">
  <br />
  <div>
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>
  <h3 align="center">A Car Showcase Website</h3>
  <img src="https://i.imgur.com/WzDeh0T.png" alt="Project Banner">
  </br>
  
  <a href="https://car-showcase-delta-nine.vercel.app/">View Demo</a>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#🤖-about">About</a>
    </li>
    <li><a href="#⚙️-tech-stack">Tech Stack</a></li>
    <li>
      <a href="#🚀-getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#🕸️-snippets">Snippets</a></li>
    <li><a href="🔗-links">Links</a></li>
    <li><a href="#📧-contact">Contact</a></li>
    <li><a href="#🌟-acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## 🤖 About

Developed with Next.js and leveraging its server-side rendering capabilities, the Car Showcase website presents various car types, showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## ⚙️ Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 🚀 Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- [Git](https://git-scm.com/) (for Windows: Download Prebuilt Installer)
- [Node.js](https://nodejs.org/en) (for Windows: Download Prebuilt Installer)
- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://rapidapi.com/apininjas/api/cars-by-api-ninjas](https://rapidapi.com/apininjas/api/cars-by-api-ninjas)
   - Sign up and choose the free plan to gain access
2. Clone the repo
   ```sh
   git clone https://github.com/LabibZ/car-showcase.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Create a new file named `.env` in the root of your project and replace the keys as needed

   ```env
   NEXT_PUBLIC_RAPID_API_KEY=
   NEXT_PUBLIC_IMAGIN_API_KEY=hrjavascript-mastery
   ```

   Note: The [Imagin Cars](https://www.imagin.studio/solutions/api) API key provided has watermarks on all the cars. You must subscribe to remove the watermarks.

5. Run the project
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## 🕸️ Snippets

<details>
<summary><code>constants.ts</code></summary>

```typescript
export const manufacturers = [
  "Acura",
  "Alfa Romeo",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Dodge",
  "Ferrari",
  "Fiat",
  "Ford",
  "GMC",
  "Honda",
  "Hyundai",
  "Infiniti",
  "Jaguar",
  "Jeep",
  "Kia",
  "Lamborghini",
  "Land Rover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "MINI",
  "Mitsubishi",
  "Nissan",
  "Porsche",
  "Ram",
  "Rolls-Royce",
  "Subaru",
  "Tesla",
  "Toyota",
  "Volkswagen",
  "Volvo",
];

export const yearsOfProduction = [
  { title: "Year", value: "" },
  { title: "2015", value: "2015" },
  { title: "2016", value: "2016" },
  { title: "2017", value: "2017" },
  { title: "2018", value: "2018" },
  { title: "2019", value: "2019" },
  { title: "2020", value: "2020" },
  { title: "2021", value: "2021" },
  { title: "2022", value: "2022" },
  { title: "2023", value: "2023" },
];

export const fuels = [
  {
    title: "Fuel",
    value: "",
  },
  {
    title: "Gas",
    value: "Gas",
  },
  {
    title: "Electricity",
    value: "Electricity",
  },
];

export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twitter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

/* START: General styles */
.max-width {
  @apply max-w-[1440px] mx-auto;
}

.padding-x {
  @apply sm:px-16 px-6;
}

.padding-y {
  @apply py-4;
}

.flex-center {
  @apply flex items-center justify-center;
}

.flex-between {
  @apply flex justify-between items-center;
}

.custom-btn {
  @apply flex flex-row relative justify-center items-center py-3 px-6 outline-none;
}
/* END: General styles */

/* START: Hero styles */
.hero {
  @apply flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto;
}

.hero__title {
  @apply 2xl:text-[72px] sm:text-[64px] text-[50px] font-extrabold;
}

.hero__subtitle {
  @apply text-[27px] text-black-100 font-light mt-5;
}

.hero__image-container {
  @apply xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;
}

.hero__image {
  @apply relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;
}

.hero__image-overlay {
  @apply absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden;
}
/* END: Hero styles */

/* START: Home styles */

.home__text-container {
  @apply flex flex-col items-start justify-start gap-y-2.5 text-black-100;
}

.home__filters {
  @apply mt-12 w-full flex-between items-center flex-wrap gap-5;
}

.home__filter-container {
  @apply flex justify-start flex-wrap items-center gap-2;
}

.home__cars-wrapper {
  @apply grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14;
}

.home__error-container {
  @apply mt-16 flex justify-center items-center flex-col gap-2;
}
/* END: Home styles */

/* START: Car Card styles */
.car-card {
  @apply flex flex-col p-6 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-3xl;
}

.car-card__content {
  @apply w-full flex justify-between items-start gap-2;
}

.car-card__content-title {
  @apply text-[22px] leading-[26px] font-bold capitalize;
}

.car-card__price {
  @apply flex mt-6 text-[32px] leading-[38px] font-extrabold;
}

.car-card__price-dollar {
  @apply self-start text-[14px] leading-[17px] font-semibold;
}

.car-card__price-day {
  @apply self-end text-[14px] leading-[17px] font-medium;
}

.car-card__image {
  @apply relative w-full h-40 my-3 object-contain;
}

.car-card__icon-container {
  @apply flex group-hover:invisible w-full justify-between text-grey;
}

.car-card__icon {
  @apply flex flex-col justify-center items-center gap-2;
}

.car-card__icon-text {
  @apply text-[14px] leading-[17px];
}

.car-card__btn-container {
  @apply hidden group-hover:flex absolute bottom-0 w-full z-10;
}
/* END: Car Card styles */

/* START: Car Details styles */
.car-details__dialog-panel {
  @apply relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5;
}

.car-details__close-btn {
  @apply absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full;
}

.car-details__main-image {
  @apply relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg;
}
/* END: Car Details styles */

/* START: Custom Filter styles */
.custom-filter__btn {
  @apply relative w-full min-w-[127px] flex justify-between items-center cursor-default rounded-lg bg-white py-2 px-3 text-left shadow-md sm:text-sm border;
}

.custom-filter__options {
  @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}
/* END: Custom Filter styles */

/* START: Footer styles */
.footer {
  @apply flex flex-col text-black-100  mt-5 border-t border-gray-100;
}

.footer__links-container {
  @apply flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10;
}

.footer__rights {
  @apply flex flex-col justify-start items-start gap-6;
}

.footer__links {
  @apply flex-1 w-full flex md:justify-end flex-wrap max-md:mt-10 gap-20;
}

.footer__link {
  @apply flex flex-col gap-6 text-base min-w-[170px];
}

.footer__copyrights {
  @apply flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10;
}

.footer__copyrights-link {
  @apply flex-1 flex sm:justify-end justify-center max-sm:mt-4 gap-10;
}
/* END: Footer styles */

/* START: searchbar styles */
.searchbar {
  @apply flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl;
}

.searchbar__item {
  @apply flex-1 max-sm:w-full flex justify-start items-center relative;
}

.searchbar__input {
  @apply w-full h-[48px] pl-12 p-4 bg-light-white rounded-r-full max-sm:rounded-full outline-none cursor-pointer text-sm;
}
/* END: searchbar styles */

/* START: search manufacturer styles */
.search-manufacturer {
  @apply flex-1 max-sm:w-full flex justify-start items-center;
}

.search-manufacturer__input {
  @apply w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm;
}

.search-manufacturer__options {
  @apply absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;
}

.search-manufacturer__option {
  @apply cursor-default select-none py-2 pl-10 pr-4;
}
/* END: search manufacturer styles */
```

</details>

<details>
<summary><code>tailwind.config.js</code></summary>

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        "primary-blue": {
          DEFAULT: "#2B59FF",
          100: "#F5F8FF",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#747A88",
      },
      backgroundImage: {
        pattern: "url('/pattern.png')",
        "hero-bg": "url('/hero-bg.png')",
      },
    },
  },
  plugins: [],
};
```

</details>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔗 Links

Assets used in the project are [here](https://drive.google.com/file/d/1Ague8aTHA6JSrzy3kscEZmrJQdtDxqwy/view)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## 📧 Contact

Labib Zaman - labibmzaman@gmail.com

Project Link: [https://github.com/LabibZ/car-showcase](https://github.com/LabibZ/car-showcase)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## 🌟 Acknowledgments

- [JavaScriptMastery](https://github.com/adrianhajdin)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
