module.exports = {
	'presets': [
		[
			'@vue/app',
			{
				// Polyfills are included in main.ts
				// in order for Vuetify to work on IE 11
				'useBuiltIns': 'entry'
			}
		]
	]
};
