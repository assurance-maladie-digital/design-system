import { tokens } from '@cnamts/design-tokens';

export const config = {
	menu: {
		offsetY: true,
		tile: true,
		zIndex: 4
	},
	btn: {
		tile: true,
		minHeight: '48px',
		width: '328px',
		color: tokens.colors.parme.base,
		class: 'd-flex px-3'
	},
	btnIcon: {
		color: 'white'
	},
	list: {
		class: 'py-0'
	},
	listItem: {
		target: '_blank',
		rel: 'noopener noreferrer'
	},
	sheet: {
		elevation: 0,
		class: 'px-4 py-3'
	}
};
