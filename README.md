This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [ES6 React boilerplate with Webpack, Graphql, Storybook](#es6-react-boilerplate)
- [Starting the dev server](#starting-the-dev-server)
- [Folder Structure](#folder-structure)
- [Available Commands](#available-commands)
  - [npm start](#npm-start)
  - [npm storybook](#npm-storybook)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
- [Production code](#production-code)
- [Supported Browsers](#supported-browsers)
- [Licence](#Licence)


## ES6 React boilerplate

React boilerplate with a Atom design styleguide . It includes:

- [x] React 16.3.2
- [x] ECMAScript 6 and JSX support
- [x] React Router v4
- [x] Webpack (v.3.8.1) and Webpack Dev Server (v.2.11.3)
- [x] Hot Module Replacement
- [x] ES6 linting with continuous linting on file change
- [x] SASS support
- [x] Styleguide using @storybook
- [x] Separate CSS stylesheets generation
- [x] Production Config
- [x] Export Separate Vendor Files
- [ ] Redux

## Starting the dev server

Make sure you have Node.js installed.

1. `git clone https://github.com/gromstone/headless_react.git`
2. Run `npm install` or `yarn install`
3. Start the dev server using `npm start`
3. Open [http://localhost:8080](http://localhost:8080)

## Folder Structure

```
my-app/
  README.md
  package.json
  package-lock.json
  config/
    jest/
    webpack.config.dev.js
    webpack.config.prod.js
    webpack.DevServer.config.js
  scripts/
    start.js
    build.js
    test.js
  public/
    index.html
    favicon.ico
  .storybook/
    addons.js
    config.js
    preview-head.html
    webpack.config.js
    WelcomeStory.js
  src/
    assets/
    Components/
    Containers/
    hoc/
    scss/
    utils/
    App.js
    App.test.js
    index.js
  UI/
    Atoms/
    Molecules/
    Organism/
    Template/
    Environment/
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Commands
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm storybook`

Runs the Storybook UI in the development mode.<br>
Open [http://localhost:6006](http://localhost:6006) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Production code

Run `npm run build`. The production-ready code will be located under `build` folder.

## Supported Browsers

By default, the generated project uses the latest version of React.

You can refer [to the React documentation](https://reactjs.org/docs/react-dom.html#browser-support) for more information about supported browsers.


## Licence

_react-webpack-boilerplate_ is available under MIT.
