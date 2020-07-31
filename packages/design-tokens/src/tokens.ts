import { lightTheme } from './colors';

const TAB_CHARACTER = '	';

const tokens = {
	colors: {
		...lightTheme,
		// Brand
		pro: '#ef6c00'
	},
	dialogWidth: {
		dialogSmall: '560px',
		dialogMedium: '800px'
	},
	pageWidth: '1440px',
	inputWidth: {
		inputSmall: '128px',
		inputMedium: '328px',
		inputLarge: '384px',
		inputXLarge: '536px'
	},
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
