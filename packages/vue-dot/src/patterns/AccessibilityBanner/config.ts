const commonBtnConfig = {
	color: 'primary',
	height: 'auto',
	minHeight: '44px',
	class: 'text-none text-wrap ma-2 z-index-10'
};

export const config = {
	sheet: {
		width: '100%',
		maxWidth: '100%',
		rounded: false,
		elevation: 3,
		class: 'pa-2'
	},
	customizeBtn: {
		...commonBtnConfig,
		outlined: true
	}
};
