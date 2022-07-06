---
title: Design Tokens
description: Les Design Tokens sont des listes de valeur, disponibles en TypeScript, JavaScript et SCSS.
---

<doc-tabs>
<doc-tab-item label="Liste">

## Les couleurs

**lightTheme** - _Thème clair_

- `primaire` : <span style="color: #0c419a">#0c419a</span>
- `secondaire` : <span style="color: #007fad">#007fad</span>
- `accent` : <span style="color: #2576cd">#2576cd</span>
- `succès` : <span style="color: #009688">#009688</span>
- `erreur` : <span style="color: #b00000">#b00000</span>
- `avertissement` : <span style="color: #785912">#785912</span>

## Les mesures

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

</doc-tab-item>

<doc-tab-item label="Installation">

## Installation

Pour installer les tokens, vous devez utiliser npm ou yarn

```bash
yarn add @cnamts/design-tokens
```

Ou

```bash
npm install @cnamts/design-tokens
```

</doc-tab-item>

<doc-tab-item label="Utilisation">

Seul les tokens personnalisés sont contenus dans ce package. Pour ceux par défaut, comme les tailles de typographie, nous utilisons les classes de Vuetify (https://vuetifyjs.com/en/styles/text-and-typography/)

## TypeScript

En TypeScript, les noms des Design Tokens sont formatés en `camelCase`.

```bash
import { tokens } from '@cnamts/design-tokens';
console.log(tokens.pageWidth); // 1440px
```

Vous pouvez également n'importer que le thème de couleur

```bash
import { lightTheme } from '@cnamts/design-tokens/src/colors';
```

## JavaScript

En JavaScript, les noms des Design Tokens sont formatés en `camelCase`.

```bash
const { tokens } = require('@cnamts/design-tokens');
console.log(tokens.pageWidth); // 1440px
```

Vous pouvez aussi utiliser la syntaxe `import`.

```bash
import { tokens } from '@cnamts/design-tokens';
```

## Sass

En Sass, les noms des Design Tokens sont formatés en `kebab-case`.

```bash
@import '@cnamts/design-tokens/dist/tokens';

.pro {
	color: $vd-pro; // #ef6c00
}
```

## JSON

En JSON, les noms des Design Tokens sont formatés en `kebab-case`.

```bash
const { tokens } = require('@cnamts/design-tokens');
console.log(tokens['page-width']); // 1440px
```

</doc-tab-item>

</doc-tabs>
