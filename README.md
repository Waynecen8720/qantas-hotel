## Overview

This project is a hotel listing application for Qantas, built with Next.js and React. The app displays a list of hotels in Sydney with various deals, prices, and ratings.
Demo Address: <https://qantas-hotel-one.vercel.app/>

## Features

	•	Hotel Listings: Displays a list of hotels with exclusive deals, ratings, and prices.
	•	Sorting: Sort hotels by price from high to low.
	•	Unit Testing: Uses React Testing Library for comprehensive unit tests.

## Getting Started
# Requirement
	•	Node.js (>= v21.5.0)
	•	npm (>= 10.2.4)

# Installation
  1.  Clone the repository:
  ```bash
    https://github.com/Waynecen8720/qantas-hotel.git
    cd qantas-hotels
  ```

  2.  Install dependencies:
  ```bash
    npm install
  ```

# Running the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# Unit Tests

This project uses React Testing Library for unit testing.
```bash
npm run test
```
# Project Structure
```bash
├── src
│   ├── __tests__
│   │   ├── home.test.tsx          # Unit tests for the home page
│   │   ├── service.test.ts        # Unit tests for services
│   │   └── uicomponent.test.tsx   # Unit tests for UI components
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.module.scss
│   │   └── page.tsx               # Main page displaying the hotel listings
│   ├── Components
│   │   ├── Header
│   │   ├── HotelsInfo
│   │   │   ├── PricePart
│   │   │   │   ├── index.module.scss
│   │   │   │   └── index.tsx
│   │   ├── PriceSorter
│   │   │   └── index.tsx
│   ├── UIComponents
│   │   ├── Rating
│   │   │   ├── index.module.scss
│   │   │   ├── index.tsx
│   │   │   ├── RatingCircleIcon.tsx
│   │   │   └── RatingStarIcon.tsx
│   │   ├── Selector
│   │   │   ├── index.ts
│   │   │   └── index.module.scss
│   │   └──index.ts
│   ├── Utils
│   │   ├── enums.ts
│   │   └── service.ts
├── .babelrc
├── .eslintrc.json
├── .gitignore
├── jest.config.ts
├── jest.setup.js
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── README.md
└── tsconfig.json
``` 

## Approach and Trade-offs
1. Component-Based Architecture
I adopted a component-based architecture to ensure reusability and maintainability. Each component handles a specific part of the UI, making the codebase easier to manage and extend.

2. Styling
I used CSS Modules and Sass for styling to ensure local scoping and avoid conflicts. This approach keeps the styles modular and maintainable. For truly global styles, such as a theme, additional configuration or approaches might be needed, which could complicate the setup.

3. Unit Testing
React Testing Library was used for unit testing due to its focus on testing components in a way that mimics user interactions.

4. TypeScript
TypeScript was chosen to add static typing to JavaScript, which helps catch errors early and improves code quality. Setting up TypeScript and ensuring all dependencies are compatible can be time-consuming.

5. Next.js
Next.js was selected for its server-side rendering capabilities, which enhance performance and SEO.

## Acknowledgments
•Next.js
•React
•React Testing Library
