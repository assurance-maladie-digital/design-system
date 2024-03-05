import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	SelectBtnField: {
		props: [
			{
				name: 'value',
				type: 'SelectBtnValue',
				default: null,
				description: 'La ou les valeurs sélectionnées par l’utilisateur.'
			},
			{
				name: 'items',
				type: 'SelectBtnItem[]',
				default: '[]',
				description: 'Les éléments à afficher dans la liste.',
				example: `{
	text: string;
	value: string | number;
	unique?: boolean;
}[]`
			},
			{
				name: 'label',
				type: 'string',
				default: 'undefined',
				description: 'Le label du champ.'
			},
			{
				name: 'multiple',
				type: 'boolean',
				default: false,
				description: 'Permet à l’utilisateur de sélectionner plusieurs valeurs.'
			},
			{
				name: 'inline',
				type: 'boolean',
				default: false,
				description: 'Affiche les boutons sur une seule ligne.'
			},
			{
				name: 'hint',
				type: 'string',
				default: 'undefined',
				description: 'Texte d’aide.'
			},
			{
				name: 'error',
				type: 'boolean',
				default: false,
				description: 'Affiche un état d’erreur.'
			},
			{
				name: 'error-messages',
				type: 'string[]',
				default: 'undefined',
				description: 'Les messages d’erreur à afficher.'
			},
			{
				name: 'readonly',
				type: 'boolean',
				default: false,
				description: 'Fige la valeur du champ.'
			},
			...customizable(`{
	btnToggle: 'VBtnToggle',
	btn: 'VBtn',
	spacer: 'VSpacer',
	icon: 'VIcon'
}`)
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'SelectBtnValue'
			},
			{
				name: 'update:error',
				description: 'Événement émis lorsque l’état d’erreur est mis à jour.',
				value: 'boolean'
			},
			{
				name: 'update:error-messages',
				description: 'Événement émis lorsque les messages d’erreur sont mis à jour.',
				value: 'string[]'
			}
		]
	}
};
