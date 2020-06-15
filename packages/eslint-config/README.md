## Installation

The default export contains all default cnam ESLint rules, including
ECMAScript 6+, and the ones listed below. It requires some peerDependencies as
well.

### NPM package

Install the package with

```sh
npm install @cnamts/eslint-config --save-dev

# or
yarn add @cnamts/eslint-config -D
```

### NPM link

If you want to test it locally first, you can use  `npm link` or `yarn link`
at the root the project to registry the module, then use ` npm link @cnamts/eslint-config` or `yarn link @cnamts/eslint-config`  at the root of the project which wants to use it.


## Usage

Now add the config to either your `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@cnamts/eslint-config"
  }
}
```

to your `.eslintrc`:

```json
{
  "extends": "@cnamts/eslint-config"
}
```

or `.eslintrc.js`:

```js
module.exports = {
  extends: '@cnamts/eslint-config',
}
```

## LICENSE

[MIT](LICENSE)
