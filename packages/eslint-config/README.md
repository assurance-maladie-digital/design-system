# ESLint Config

ESLint configurations for JavaScript and TypeScript used across our projects.

## Installation

To install the package, you need to use yarn or npm:

```sh
yarn add @cnamts/eslint-config
# OR
npm install @cnamts/eslint-config
```

## Usage

To use the ESLint configuration, you need to create a `.eslintrc.js` file and use the `extends` property to reference `@cnamts/eslint-config`:

```js
module.exports = {
	extends: '@cnamts/eslint-config'
};
```

To use the TypeScript configuration, you need to reference `@cnamts/eslint-config`:

```js
module.exports = {
	extends: '@cnamts/eslint-config/typescript'
};
```
