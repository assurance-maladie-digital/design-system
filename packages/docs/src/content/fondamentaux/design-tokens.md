---
title: Design Tokens
description: Les Design Tokens sont un ensemble de variables qui représentent les décisions de Design et remplacent les valeurs statiques dans le code.
---

## Couleurs

### Thème clair

Le thème clair est utilisé pour configurer le [thème](https://vuetifyjs.com/en/features/theme/) de Vuetify :

- primary : `palette.amBlue.base`
- secondary : `palette.cyan.darken20`
- accent : `palette.cyan.base`
- error : `palette.orange.darken20`
- info : `palette.amBlue.base`
- success : `palette.turquoise.darken20`
- warning : `palette.yellow.darken40`
- risque-pro : `palette.brick.base`

### Palette

Pour voir la palette de couleurs, consultez la page [Couleurs](/fondamentaux/couleurs).

## Mesures

### Boîtes de dialogue

- dialog-small : `560px`
- dialog-medium : `800px`

### Pages

- page-width : `1440px`

### Champs de formulaires

- input-small : `128px`
- input-medium : `328px`
- input-large : `384px`
- input-x-large : `536px`

## Installation

Pour installer les Design Tokens, consultez les [instructions d'installation](/demarrer/installation#composants/design-tokens).

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
