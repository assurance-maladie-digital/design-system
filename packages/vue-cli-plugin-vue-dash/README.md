# Vue CLI plugin Vue Dash

> Vue CLI plugin to scaffold CNAM front-end projects

## Installation

If you want to scaffold a new project, you should use the [Vue Dash Preset](https://github.com/assurance-maladie-digital/vue-cli-preset#readme).

But if you want to add it to an existing project, you should install the plugin and then invoke it:

```bash
# Install the plugin
yarn add -D @cnamts/vue-cli-plugin-vue-dash

# Invoke it
vue invoke @cnamts/vue-dash
```

By default, this will not update your project files, but if you want to render the Vue Dash template anyway, you can use the `--render-template` option:

```bash
vue invoke @cnamts/vue-dash -- --render-template
```

## Features

This plugin contains the template to scaffold new projects, but also some extra features described below.

### Auto fix missing env var file

In our applications, there is env var files located in `public/js/config`.

When cloning the project, you have two files: `config.js.env` and `config.js`. The first is used when deploying your project, and the later serves as a template to create the `config.js` file locally.

This plugin augments the default `vue-cli-service serve` command by copying `config.js.dist` to `config.js` if the file doesn't exists.
This way you have no setup to do when cloning a project!

### Vue Dot tree-shaking

By default, when importing the Vue Dot library, all components are registered globally.

You can reduce the final size of your application by importing only the components that you use.

For this, the `vueDotLoader` is used in combinaison with the [Vuetify Loader](https://github.com/vuetifyjs/vuetify-loader) plugin:

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
