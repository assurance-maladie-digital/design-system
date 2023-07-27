import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	PeriodField: {
		props: [
			{
				name: 'value',
				type: 'PeriodValue',
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
			...customizable(`{
	from: 'DatePicker',
	to: 'DatePicker'
}`)
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur du champ est mise à jour.',
				value: 'PeriodValue'
			}
		]
	}
};
