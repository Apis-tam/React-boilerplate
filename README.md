React Boilerplate

Boilerplate for quick start of modular ReactJS application using TypeScript, Redux, Readux/toolkit and SCSS with predefined Code Quality tools and other helpful things.

Basic Setup
These steps are required before further steps.

Machine Requirements
You need to have installed:

Node.js
NPM Package manager
Cloned or downloaded version of this Project
To prepare Application for further steps after repository clone you need to run next commands:

cd <PROJECT_DIR>
npm install
These commands are going to help you to install all Project dependencies.

Development Start
To run Application in development mode you need to run npm run dev. As a result, you will get a fully completed local development environment and run a development server at the http://localhost:3000.

npm run dev
Build Production
To build an optimized production version you need to run npm run build, after completion, you will have bundled production code that you can use to deploy it to your hosting. You can take the result at the ~/dist/ folder

npm run build
Useful Commands

npm start - Run project in locale env.

npm run lint - Checks Project for ESLint errors and warnings.

npm run lint:fix - Automatically resolve as much as possible ESLint errors. If not all resolved will throw an error.

npm run stylelint - Checks Project for SCSS or CSS stylelint errors and warnings.

npm run stylelint:fix - Automatically resolve as much as possible stylelint errors and warnings. If not all resolved will throw an error.

npm run test - Runs all automatic tests and shows how many tests passed and broken.

Architecture
Basic Info
TypeScript - It's a typed superset of JavaScript that compiles to plain JavaScript.
React - A JavaScript library for building user interfaces.
Redux - State management of the Application.
Redux/toolkit - Redux middleware library, that is designed to make handling side effects in your Redux Application nice and simple.
Axios - Promise based HTTP client for the browser. Helps to organize all HTTP request of the Application.
SASS (SCSS syntax) - CSS pre-processor that helps to organize styles of the Application.

Code Quality Guards
TypeScript
Types help to build a more scalable, readable and stable application with an increase of developer productivity and potential time-saving.

ESLint
The pluggable linting utility for JavaScript/TypeScript and JSX/TSX files. It helps to write code in such a way that it is in a single code-style as if written by one developer, which saves a lot of time on maintainability and introducing new developers into the team. ESLint also avoids some commonplace errors, such as a forgotten semicolon, an attempt to reassign a value to a constant, etc., which also saves time during the Code Review and debug.

Stylelint
The pluggable linting utility for style files of the Project. It's almost the same as ESLint, but for styles :)

Automatic Tests
You can see more details below in related section.
