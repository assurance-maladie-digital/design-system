import { tokens } from '@cnamts/design-tokens';

export const config = {
	menu: {
		offsetY: true,
		zIndex: 4,
		minWidth: '198px',
		maxWidth: '198px',
		nudgeRight: 0
	},
	btn: {
		text: true,
		height: 'auto'
	},
	icon: {
		color: tokens.colors.cyan.darken20,
		class: 'ml-2 ml-sm-5'
	},
	logoutListItem: {
		class: 'primary--text'
	},
	logoutIcon: {
		color: 'primary',
		class: 'mr-4'
	}
};
