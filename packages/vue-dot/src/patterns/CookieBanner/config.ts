const commonBtnConfig = {
	color: 'primary',
	height: 'auto',
	minHeight: '44px',
	class: 'text-wrap ma-2'
};

export const config = {
	sheet: {
		width: '800px',
		maxWidth: '100%',
		rounded: true,
		elevation: 3,
		class: 'pa-8'
	},
	closeBtn: {
		icon: true,
		width: '32px',
		height: '32px',
		class: 'mt-n2 mr-n2 ml-4'
	},
	customizeBtn: {
		...commonBtnConfig,
		outlined: true
	},
	rejectBtn: {
		...commonBtnConfig
	},
	acceptBtn: {
		...commonBtnConfig
	}
};
