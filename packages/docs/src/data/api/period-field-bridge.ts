import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	PeriodField: {
		props: [
			{
				name: 'model-value',
				type: `{
					from: string | null,
					to: string | null
				}`,
				description: 'Valeur du champ.',
				default: `{
	from: null,
	to: null
}`
			},
			{
				name: 'outlined',
				type: 'boolean',
				description: 'Affiche les `VTextField` en mode `outlined`.',
				default: false
			},
			{
				name: 'disabled',
				type: 'boolean',
				description: 'Désactive le champ.',
				default: false
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
				default: `'DD/MM/YYYY'`,
				description: 'Le format de la date utilisée avec le `v-model`.'
			},
			{
				name: `vuetify-options`,
				type: `{
	from: Record<string, any>,
	to: Record<string, any>
}`,
				description: 'Configration des composants internes.',
				example: `{
	from: {
		label: 'Début de validité',
	},
	to: {
		label: 'Fin de validité'
	}
}`
			}
		],
		events: [
			{
				name: 'update:model-value',
				description: 'Événement émis lorsque la valeur du champ est mise à jour.',
				value: `{
	from: string | null,
	to: string | null
}`
			}
		]
	}
};
