Le fichier `vue.config.js` contient la configuration globale de [Vue CLI](https://cli.vuejs.org/).

<doc-alert type="warning">
Il n’est pas recommandé d’éditer ce fichier.
</doc-alert>

## Configuration par défaut

Par défaut, le fichier contient la configuration suivante :

### Version de l’application

```js
process.env.VUE_APP_VERSION = require('./package.json').version;
```

Cette ligne permet de définir la variable `VUE_APP_VERSION`, utilisée dans le composant `AppFooter`, en utilisant la propriété `version` du fichier `package.json`.

### Import automatique des composants Vue Dot

```js
chainWebpack: config => {
	// Auto-load VueDot components
	config.plugin('VuetifyLoaderPlugin').tap(vueDotLoader);
}
```

Ce bloc permet d’utiliser le [loader Vue Dot](https://github.com/assurance-maladie-digital/design-system/blob/dev/packages/vue-cli-plugin-vue-dash/vueDotLoader.js), basé sur le [loader Vuetify](https://github.com/vuetifyjs/vuetify-loader).

Ce loader permet d’importer automatiquement les composants Vue Dot que vous utilisez, et uniquement ceux-ci afin de réduire la taille finale de l’application.

### Configuration webpack

```js
configureWebpack: {
	devtool: 'source-map',
	optimization: {
		splitChunks: {
			chunks: 'all',
			// Remove default ~ from filename
			// because it's blocked by firewall
			automaticNameDelimiter: '.'
		}
	},
	performance: {
		hints: false
	}
}
```

Ce bloc permet de surcharger la [configuration de webpack](https://webpack.js.org/configuration/) par défaut, afin notamment de retirer le caractère `~` qui est bloqué par le pare-feu ou encore de masquer les warnings sur la taille de l’application lors de la compilation de celle-ci.

### Transpilation des dépendances

```js
// Transpile ES6 inside dependencies
transpileDependencies: [
	/node_modules[/\\\\]vuetify[/\\\\]/,
	'vuex-persist',
	'vue-input-facade'
]
```

Ce bloc permet d’indiquer à [Babel](https://babeljs.io/) les dépendances à transpiler dans le dossier `node_modules` afin de transpiler le code ES6 en ES5 de ces dépendances pour supporter IE 11.

### Construction parallèle

```js
// Disable parallel build on the platform
parallel: process.env.NODE_ENV !== 'production'
```

Cette ligne permet de désactiver l’utilisation de [thread-loader](https://www.npmjs.com/package/thread-loader) lors de la compilation de l’application sur la plateforme, car cela génère des erreurs comme nous utilisons certaines options des loaders de webpack.

## Plus d’informations

Vous pouvez retrouver plus d’informations sur la [documentation de Vue CLI](https://cli.vuejs.org/config/).
