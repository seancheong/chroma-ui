# Chroma UI Design System

[![codecov](https://codecov.io/gh/seancheong/chroma-ui/branch/main/graph/badge.svg?token=7TDRD5ZPNZ)](https://codecov.io/gh/seancheong/chroma-ui)
[![Depfu](https://badges.depfu.com/badges/a6fbc240723c745c994477f00426e68f/overview.svg)](https://depfu.com/github/seancheong/chroma-ui?project_id=38391)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

> :warning: Disclaimer: This design system is currently in the early stages of development. Many components are not yet ready for production use. Please exercise caution when using this package in your projects.

Chroma UI Design System is built with [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com), [TypeScript](https://www.typescriptlang.org) and [Storybook](https://storybook.js.org).\
It provides a set of resuable UI components that are easy to use and customize.

View the live Storybook at https://seancheong.github.io/chroma-ui

## Installation

You can install `chroma-ui` package using either npm or yarn.

```sh
# npm
npm install chroma-ui

# yarn
yarn add chroma-ui
```

## Tailwind CSS Integration

Chroma UI Design System comes with integrated Tailwind CSS for styling. However, Tailwind CSS is not a mandatory requirement for using this package. If you prefer not to use Tailwind CSS, you can customize the components using just regular CSS.

### If you are not using Tailwind CSS in your application:

You will have to import the precompiled CSS file provided by this package inside the main entry file. This CSS file contains all the necessary styles required for the components.

```javascript
import 'chroma-ui/dist/index.css';
```

### If you are using Tailwind CSS in your application:

There are two options available:

#### Option 1: Use your own Tailwind CSS setup

If you want to use your own Tailwind CSS setup, you should add the required classes to the safelist in your Tailwind CSS configuration.

Chroma UI dynamically generates certain classes, so to ensure Tailwind CSS is able to generate the required stylesheet by these classes in production, you need to add them to the safelist. Below is the safelist configuration for Chroma UI:

```javascript
// tailwind.config.js

module.exports = {
  // ...
  safelist: [
    {
      pattern: /w-.*/,
    },
  ],
  // ...
};
```

Please note that you'll need to keep the safelist updated if new dynamic classes are added in future versions of Chroma UI.

#### Option 2: Import the Chroma UI CSS file

Alternatively, you can import the index.css from Chroma UI in your application. This CSS file includes all the necessary styles for the Chroma UI components, and you don't have to worry about the safelist in this case.

```javascript
import 'chroma-ui/dist/index.css';
```

Please note that by doing this, you will be including the styles for all Chroma UI components, which might increase the size of your CSS bundle. Use this option if you are using a significant number of Chroma UI components in your application or if keeping the safelist updated is not feasible.

## Available Scripts

In the project directory, you can run:

### `npm storybook`

Launch the Storybook server.\
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

Browse the available components and their documentation in the Storybook interface.\
You can interact with the components, view their code examples, and learn how to use them in your projects.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
