import { Props } from "~/types";

export const widthable: Props = [
	{
		name: 'max-width',
		type: [
			'number',
			'string'
		],
		default: 'undefined',
		description: 'La largeur maximale du composant.'
	},
	{
		name: 'min-width',
		type: [
			'number',
			'string'
		],
		default: 'undefined',
		description: 'La largeur minimale du composant.'
	},
	{
		name: 'width',
		type: [
			'number',
			'string'
		],
		default: `'100%'`,
		description: 'La largeur du composant.'
	}
];
