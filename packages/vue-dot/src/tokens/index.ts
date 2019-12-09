import vuetifyTheme from './vuetifyTheme';

const TAB_CHARACTER = '	';

const tokens = {
	'colors': {
		...vuetifyTheme,
		// Brand
		pro: '#ef6c00'
	},
	'page-width': '1440px',
	// json-to-scss config
	'_jsonToScss': {
		indentationSize: '1',
		indentationText: TAB_CHARACTER,
		sassVariableName: 'vd-tokens'
	}
};

export = tokens;
