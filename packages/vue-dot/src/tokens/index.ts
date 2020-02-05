import { vuetifyTheme } from './vuetifyTheme';

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

// We need a CommonJS export (and only this) for the
// package json-to-scss in order to generate a
// clean token file
export = tokens;
