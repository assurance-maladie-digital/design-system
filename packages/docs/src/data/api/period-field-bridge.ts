import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	PeriodField: {
		props: [
			{
				name: 'value',
				type: 'Date[]',
				description: 'Valeur du champ.',
				default: `{string[]}`
			},
			{
				name: 'outlined',
				type: 'boolean',
				description: 'Affiche les `VTextField` en mode `outlined`.',
				default: false
			},
			{
				name:  'no-prepend-icon',
				type: 'boolean',
				description: 'Masque l’icône avant le `VTextField`.',
				default: false,
			},
			{
				name:  'append-icon',
				type: 'boolean',
				description: 'Affiche le bouton du calendrier dans le `VTextField`.',
				default: false,
			},
			{
				name: 'disabled',
				type: 'boolean',
				description: 'Désactive le champ.',
				default: false
			},
			{
				name: 'label',
				type: 'string',
				description: 'Libellé du champ.',
				default: `''`
			},
			{
				name: 'hint',
				type: 'string',
				description: 'Texte d’aide affiché sous le champ.',
				default: `'DD/MM/YYYY'`
			},
			{
				name: 'date-format',
				type: 'string',
				default: `'DD/MM/YYYY'`,
				description: 'Le format de la date affichée dans le `VTextField`.'
			},
			{
				name: 'date-format-return',
				type: 'string',
				default: `'DD-MM-YYYY'`,
				description: 'Le format de la date utilisée avec le `v-model`.'
			},
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur du champ est mise à jour.',
				value: 'Date[]'
			}
		]
	}
};
