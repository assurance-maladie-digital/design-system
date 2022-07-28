---
title: Design Tokens
description: Les Design Tokens sont un ensemble de variables qui représentent les décisions de Design et remplacent les valeurs statiques dans le code.
---

## Couleurs

### Thème clair

Le thème clair est utilisé pour configurer le [thème](https://vuetifyjs.com/en/features/theme/) de Vuetify :

```js
primary: palette.amBlue.base
secondary: palette.cyan.darken20
accent: palette.cyan.base
error: palette.orange.darken20
info: palette.amBlue.base
success: palette.turquoise.darken20
warning: palette.yellow.darken40
risquePro: palette.brick.base
```

### Palette

Pour voir la palette de couleurs, consultez la page [Couleurs](/fondamentaux/couleurs).

## Mesures

<doc-design-tokens-width></doc-design-tokens-width>

**dialogWidth** - _Pour les modales_

- `dialogSmall` : 560px
- `dialogMedium` : 800px

**pageWidth** - _Pour les pages_

- `pageWidth` : 1440px

**inputWidth** - _Pour les inputs_

- `inputSmall` : 128px
- `inputMedium` : 328px
- `inputLarge` : 384px
- `inputXLarge` : 536px

## Installation

Pour installer les Design Tokens, consultez les [instructions d'installation](/installation#composants/design-tokens).

## Utilisation

### TypeScript

```ts
import { tokens } from '@cnamts/design-tokens';
console.log(tokens.pageWidth);
```

### JavaScript

```js
const { tokens } = require('@cnamts/design-tokens');
console.log(tokens.pageWidth);
```

### SCSS

```scss
@import '@cnamts/design-tokens/dist/tokens';

.pro {
	color: $vd-page-width;
}
```

### JSON

```js
const { tokens } = require('@cnamts/design-tokens');
console.log(tokens['page-width']);
```
