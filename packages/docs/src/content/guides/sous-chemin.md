---
title: Sous-chemin personnalisé
description: Ajout d’un sous-chemin personnalisé dans un projet standard.
---

Pour déployer une application Vue sur un sous-chemin (par exemple `/my-app/`), vous devez [configurer Vue CLI](https://cli.vuejs.org/) ainsi que [Vue Router](https://v3.router.vuejs.org/fr/).

## Configuration de Vue CLI

Pour configurer Vue CLI, vous devez configurer les propriétés `publicPath` et `outputDir` dans le fichier `vue.config.js` :

```js
// … imports

const config = defineConfig({
	publicPath: '/my-app/',
	outputDir: 'dist/my-app/',
	// … autres options de configuration
});

module.exports = config;
```

## Configuration de Vue Router

Pour configurer Vue Router, vous devez configurer la propriété `base` dans le fichier `src/router/index.ts` :

```ts
// … imports

const router = new VueRouter({
	mode: 'history', // Use the History API, and remove the hash from the URL
	base: '/my-app/',
	routes,
	scrollBehavior
});

export { router };
```

## Chargement des polices

Pour que les polices se chargent correctement, vous devez ajouter le sous-chemin dans le fichier `public/css/fonts.css` :

```css
@font-face {
	font-family: 'Source Sans 3';
	src:
		url('/my-app/fonts/Source_Sans_3/SourceSans3-ExtraLight.woff2') format('woff2'),
		url('/my-app/fonts/Source_Sans_3/SourceSans3-ExtraLight.woff') format('woff');
	font-weight: 200;
	font-style: normal;
}

/* … */
```
