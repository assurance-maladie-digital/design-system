import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	RangeField: {
		props: [
			{
				name: 'min',
				type: 'string',
				default: 0,
				description: 'La valeur minimale de l’intervalle possible.'
			},
			{
				name: 'max',
				type: 'string',
				default: 0,
				description: 'La valeur maximale de l’intervalle possible.'
			},
			{
				name: 'value',
				type: 'string',
				default: 'undefined',
				description: 'La valeur saisie par l’utilisateur.'
			},
			{
				name: 'outlined',
				type: 'boolean',
				description: 'Affiche les `VTextField` en mode `outlined`.',
				default: false
			},
			...customizable(`{
	textField: 'VTextField',
	rangeSlider: 'VRangeSlider'
}`)
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'string'
			}
		]
	}
};
