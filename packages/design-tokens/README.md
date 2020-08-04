# Design Tokens

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

In TypeScript, Design Tokens names are formatted in `camelCase`.

```ts
import { tokens } from '@cnamts/design-tokens';
console.log(tokens.pageWidth); // 1440px
```

You can also import only the color themes:

```ts
import { lightTheme } from '@cnamts/design-tokens/src/colors';
```

### JavaScript

In JavaScript, Design Tokens names are also formatted in `camelCase`.

```ts
const { tokens } = require('@cnamts/design-tokens');
console.log(tokens.pageWidth); // 1440px
```

You can also use the `import` syntax:

```ts
import { tokens } from '@cnamts/design-tokens';
```

### Sass

In Sass, Design Tokens names are formatted in `kebab-case`.

```scss
@import '@cnamts/design-tokens/src/tokens';

.pro {
	color: $vd-pro; // #ef6c00
}
```

### JSON

In JSON, Design Tokens names are also formatted in `kebab-case`.

```ts
const { tokens } = require('@cnamts/design-tokens');
console.log(tokens['page-width']); // 1440px
```
