import { Tokens } from './types';

import { lightTheme } from './colors';

export const tokens: Tokens = {
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
	}
};
