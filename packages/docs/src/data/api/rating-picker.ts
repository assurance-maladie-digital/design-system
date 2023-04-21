import { Api } from '~/types';



export const api: Api = {
	RatingPicker: {
		props: [
			{
				name: 'type',
				type: 'string',
				description: 'un des 3 type parmis, NumberPicker, StarsPicker, EmotionPicker',
				required: true
			},
			{
				name: 'label',
				type: 'string',
				description: 'un titre affiché pour le rating',
				required: true
			},
			{
				name: 'length',
				type: 'number',
				description: 'taille du rating pour un emotionRation, 3 par defaut',
				default: 3
			},
			{
				name: 'hide-close-buttons',
				type: 'boolean',
				description: 'Masque les boutons de fermeture.',
				default: false
			},
			{
				name: 'readonly',
				type: 'boolean',
				description: 'en mode lecture seule',
				default: false
			},
			{
				name: 'itemLabels',
				type: 'string[]',
				description: 'liste des labels des items des ratings'
			}
		],
		events: [
			{
				name: 'on-validate',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton "Transmettre mon avis"',
				value: `void`
			},
			{
				name: 'on-close',
				description: 'Événement émis lorsque l’utilisateur clique sur les boutons de fermeture',
				value: `void`
			},
			{
				name: 'input',
				description: 'Événement émis lorsque l’utilisateur valide la première question',
				value: `void`
			}
		]
	}
};
