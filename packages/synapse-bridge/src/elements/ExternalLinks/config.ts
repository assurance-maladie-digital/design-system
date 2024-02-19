import { tokens } from '@cnamts/design-tokens'

export const config = {
	menu: {
		tile: true,
		zIndex: 4,
	},
	btn: {
		tile: true,
		minHeight: '48px',
		minWidth: '328px',
		color: tokens.colors.parme.base,
		class: 'd-flex px-3',
	},
	btnIcon: {
		color: 'white',
	},
	linkIcon: {
		color: 'rgba(0, 0, 0, .54)',
	},
	list: {
		class: 'py-0',
	},
	listItem: {
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	sheet: {
		class: 'px-4 py-3',
	},
}
