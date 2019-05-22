module.exports = {
	'presets': [
		[
			'@vue/app',
			{
				// Do not include polyfills,
				// it's the responsability of the user
				'useBuiltIns': false
			}
		]
	]
};
