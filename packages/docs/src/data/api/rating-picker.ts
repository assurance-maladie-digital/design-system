import { Api } from '~/types';

import { ratingMixinProps, ratingMixinEvents } from './shared/mixins/rating-mixin';

export const api: Api = {
	RatingPicker: {
		props: [
			{
				name: 'type',
				type: 'string',
				required: true,
				description: 'Le type de champ à afficher.',
				example: `'number' | 'stars' | 'emotion'`
			},
			{
				name: 'label',
				type: 'string',
				required: true,
				description: 'Le label du champ.'
			},
			{
				name: 'readonly',
				type: 'boolean',
				default: false,
				description: 'Passe le champ en lecture seule.'
			},
			{
				name: 'item-labels',
				type: 'string[]',
				default: null,
				description: 'Liste des labels pour les boutons.'
			},
			{
				name: 'two-emotions',
				type: 'boolean',
				default: false,
				description: 'Limite la sélection à deux choix lorsque que le champ est de type `emotion`.'
			},
			{
				name: 'value',
				type: 'number',
				default: -1,
				description: 'La note sélectionnée par l’utilisateur.'
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour ajouter du contenu affiché après la sélection de l’utilisateur.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la valeur est mise à jour.',
				value: 'number'
			}
		]
	},
	EmotionPicker: {
		props: [
			...ratingMixinProps,
			{
				name: 'length',
				type: 'number',
				default: 3,
				description: 'Limite la sélection à deux ou trois choix.',
				example: '2 | 3'
			},
			{
				name: 'item-labels',
				type: 'string[]',
				default: `[
	'Pas du tout',
	'Moyen',
	'Parfait !'
]`,
				description: 'Liste des labels pour les boutons.'
			}
		],
		events: ratingMixinEvents
	},
	NumberPicker: {
		props: [
			...ratingMixinProps,
			{
				name: 'length',
				type: 'number',
				default: 10,
				description: 'Le nombre de choix possibles.'
			},
			{
				name: 'item-labels',
				type: 'string[]',
				default: null,
				description: 'Les deux labels à afficher.'
			}
		],
		events: ratingMixinEvents
	},
	StarsPicker: {
		props: [
			...ratingMixinProps,
			{
				name: 'length',
				type: 'number',
				default: 5,
				description: 'Le nombre de choix possibles.'
			}
		],
		events: ratingMixinEvents
	}
};
