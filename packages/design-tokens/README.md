# Design Tokens`

> Design Tokens of our Design System

## Installation

The Design Tokens are available in TypeScript, JavaScript and SCSS.

To install the tokens, you need to use yarn or npm:

```sh
yarn add @cnamts/design-tokens
# OR
npm install @cnamts/design-tokens
```

## Usage

Only custom tokens are contained in this package, for default ones like font size or elevation, we use the [helper classes from Vuetify](https://vuetifyjs.com/en/styles/text-and-typography/).

### TypeScript

You need to import the tokens from the main file:

```ts
import tokens from '@cnamts/design-tokens';
```

Then you can access the tokens using object syntax like `tokens.colors` or `tokens['dialog-width']`.

You can also import only the color themes:

```ts
import { lightTheme } from '@cnamts/design-tokens/src/colors';
```

### SCSS

You need to import the main file:

```scss
@import '@cnamts/design-tokens/src/tokens';
```

Then you can access all the tokens using SCSS vars like `$vd-primary`.
