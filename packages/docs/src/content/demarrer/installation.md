---
title: Installation
description: Création d’un nouveau projet ou installation d’un composant du Design System dans un projet existant.
---

## Création d’un nouveau projet

Pour créer un nouveau projet, il est recommandé d’utiliser [Vue CLI](https://cli.vuejs.org/guide/installation.html), un outil développé par l’équipe cœur de Vue.js en combinaison avec Vue Dash, un outil interne qui permet de pré-configurer les nouveaux projets avec les règles et les outils de l’Assurance Maladie.

### Pré-requis

Pour créer un nouveau projet, vous devez installer les outils suivants :

- [Node.js](https://nodejs.org/) LTS
- [Yarn](https://classic.yarnpkg.com/)
- [Vue CLI](https://cli.vuejs.org/guide/installation.html)

Certaines de nos dépendances ont besoin de [node-gyp](https://github.com/nodejs/node-gyp#installation) pour fonctionner. Vous n’avez pas besoin d’installer *node-gyp* directement, mais vous pouvez avoir besoin d’outils supplémentaires, en particulier sur Windows. Consultez la documentation de *node-gyp* pour plus de détails.

### Création

Une fois les outils installés, vous pouvez créer un nouveau projet :

```bash
vue create my-project --preset assurance-maladie-digital/vue-cli-preset
```

Les questions suivantes vous seront posées pour vous permettre d’ajouter les fonctionnalités dont vous avez besoin pour votre projet :

<doc-expansion-panels class="mb-8">
<doc-expansion-panel label="Description du projet ?">

Vous pouvez décrire succinctement votre projet. Cette description sera utilisée dans le fichier *README.md* et comme valeur par défaut de la balise meta description.

</doc-expansion-panel>

<doc-expansion-panel label="Utiliser Vue i18n gérer les textes de l’application ?">

Utilisation de [Vue i18n](https://kazupon.github.io/vue-i18n/) pour gérer les textes de l’application. Cela permet de séparer les textes des composants et de les rendre plus maintenable mais également de gérer plusieurs langues.

</doc-expansion-panel>

<doc-expansion-panel label="Utiliser Vuex Persist pour persister le store ?">

Utilisation de [Vuex Persist](https://championswimmer.in/vuex-persist/) pour persister le store [Vuex](https://vuex.vuejs.org/) dans un stockage persistent comme le *localStorage*.

</doc-expansion-panel>

<doc-expansion-panel label="Utiliser Cypress pour les tests d’interface ?">

Utilisation de [Cypress](https://www.cypress.io/) pour les tests d’interface (ou *end-to-end*).

</doc-expansion-panel>

<doc-expansion-panel label="Utiliser la configuration Jenkins par défaut ?">

Utilisation de [Jenkins](https://www.jenkins.io/) pour le déploiement et l’intégration continue.

</doc-expansion-panel>

<doc-expansion-panel label="Utiliser Matomo pour l’analyse d’audience ?">

Utilisation de [Matomo](https://fr.matomo.org/) pour l’analyse d’audience.

</doc-expansion-panel>
</doc-expansion-panels>

<doc-alert type="info">
Le projet sera créé dans un nouveau dossier au nom de votre projet.
</doc-alert>

<doc-alert type="info">

Vous pouvez retrouver le détail des dossiers et fichiers créés dans le [Starter Kit Explorer](/starter-kit/explorer).

</doc-alert>

## Installation dans un projet existant

Installation d’une des librairies du Design System dans un projet existant.

<doc-tabs namespace="composants">
<doc-tab-item label="Vue Dot">

Vue Dot est la librairie qui porte les composants du Design System.

Pour l’ajouter dans votre projet, vous devez l’installer :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add @cnamts/vue-dot
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install @cnamts/vue-dot
```
</doc-tab-item>
</doc-tabs>

Ensuite, vous pouvez créer un fichier plugin `src/plugins/vue-dot.ts` avec le contenu suivant :

```ts
// src/plugins/vue-dot.ts
import Vue from 'vue';

// Import Vue Dot styles
import '@cnamts/vue-dot/dist/vue-dot.css';

// Import Vue Dot from src
import VueDot from '@cnamts/vue-dot';

Vue.use(VueDot);
```

Puis importer ce fichier dans le fichier d’entrée de votre application :

```ts
// src/main.ts
import './plugins/vue-dot';
```

</doc-tab-item>

<doc-tab-item label="Form Builder">

Le FormBuilder est un ensemble de composants pour afficher des formulaires. Avant de l’installer, vous devez installer Vue Dot.

Pour l’ajouter dans votre projet, vous devez l’installer :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add @cnamts/form-builder
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install @cnamts/form-builder
```
</doc-tab-item>
</doc-tabs>

Ensuite, vous pouvez créer un fichier plugin `src/plugins/form-builder.ts` avec le contenu suivant :

```ts
// src/plugins/form-builder.ts
import Vue from 'vue';

import FormBuilder from '@cnamts/form-builder';

Vue.use(FormBuilder);
```

Puis importer ce fichier dans le fichier d’entrée de votre application :

```ts
// src/main.ts
import './plugins/form-builder';
```
</doc-tab-item>

<doc-tab-item label="Vue Dash">

Vue Dash est le [plugin Vue CLI](https://cli.vuejs.org/guide/plugins-and-presets.html) qui génère le template d’un nouveau projet.

Pour l’ajouter dans un projet existant, vous devez l’installer :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add -D @cnamts/vue-cli-plugin-vue-dash
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install -D @cnamts/vue-cli-plugin-vue-dash
```
</doc-tab-item>
</doc-tabs>

puis l’invoquer :

```bash
vue invoke @cnamts/vue-dash
```

Par défaut, lorsque le plugin est invoqué manuellement, il n’applique pas le template afin de ne pas écraser les fichiers du projet, mais vous pouvez utiliser l’option `--render-template` pour l’appliquer :

```bash
vue invoke @cnamts/vue-dash -- --render-template
```

### Tree-shaking de Vue Dot

Par défaut, tous les composants de Vue Dot sont importés et enregistrés de manière globale.

Vous pouvez réduire la taille de votre application finale en n’important que les composants que vous utilisez.

Pour cela, vous devez utiliser le loader `vueDotLoader` en combinaison avec le plugin [Vuetify Loader](https://github.com/vuetifyjs/vuetify-loader) :

```js
// vue.config.js
const { vueDotLoader } = require('@cnamts/vue-cli-plugin-vue-dash/vueDotLoader');

module.exports = {
	chainWebpack: config => {
		// Auto-load Vue Dot components
		config.plugin('VuetifyLoaderPlugin').tap(vueDotLoader);
	}
};
```

</doc-tab-item>

<doc-tab-item label="Design Tokens">

Les Design Tokens sont un ensemble de variables représentant des valeurs utilisées dans notre Design System, et disponibles sous plusieurs formats.

Pour les utiliser, vous devez les installer :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add -D @cnamts/design-tokens
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install -D @cnamts/design-tokens
```
</doc-tab-item>
</doc-tabs>

Ensuite, vous pouvez importer les tokens dont vous avez besoin :

```ts
import { tokens } from '@cnamts/design-tokens';
console.log(tokens.pageWidth); // 1440px
```

</doc-tab-item>

<doc-tab-item label="CLI Helpers">

Les CLI Helpers sont des fonctions utilitaires pour construire des outils en ligne de commande en node.js.

Pour les utiliser, vous devez les installer :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add -D @cnamts/cli-helpers
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install -D @cnamts/cli-helpers
```
</doc-tab-item>
</doc-tabs>

Ensuite, vous pouvez importer les fonctions dont vous avez besoin :

```js
import { log, done, getPath } from '@cnamts/cli-helpers';
```

</doc-tab-item>

</doc-tabs>
