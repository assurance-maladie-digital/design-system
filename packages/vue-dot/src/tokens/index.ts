// Color used in the Vuetify theme
// that are also Design Tokens
export const vuetifyTheme = {
	// Brand
	primary: '#003463',
	secondary: '#0c4887',
	accent: '#2576cd',
	// State
	success: '#009688',
	error: '#b00000',
	warning: '#ba8b00'
};

const TAB_CHARACTER = '	';

module.exports = {
	colors: {
		...vuetifyTheme,
		// Brand
		pro: '#ef6c00'
	},
	// json-to-scss config
	_jsonToScss: {
		indentationSize: '1',
		indentationText: TAB_CHARACTER,
		sassVariableName: 'vd-tokens'
	}
};
