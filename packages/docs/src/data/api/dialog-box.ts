import { Api } from '~/types';

export const api: Api = {
	DialogBox: {
		props: [
			{
				name: 'value',
				type: 'boolean',
				default: false,
				description: 'Contrôle la visibilité de la boîte de dialogue.'
			},
			{
				name: 'title',
				type: 'string',
				default: 'undefined',
				description: 'Le titre de la boîte de dialogue.'
			},
			{
				name: 'width',
				type: 'string',
				default: `'800px'`,
				description: 'La largeur de la boîte de dialogue.'
			},
			{
				name: 'cancel-btn-text',
				type: 'string',
				default: `'Annuler'`,
				description: 'Le texte du bouton *Annuler*.'
			},
			{
				name: 'confirm-btn-text',
				type: 'string',
				default: `'Valider'`,
				description: 'Le texte du bouton *Valider*.'
			},
			{
				name: 'hide-actions',
				type: 'boolean',
				default: false,
				description: 'Masque les boutons d’actions.'
			},
			{
				name: 'persistent',
				type: 'boolean',
				default: false,
				description: 'Désactive la fermeture de la boîte de dialogue lors de l’appui sur la touche *Échap* ou du clic en-dehors de l’élément.'
			},
			{
				name: 'overlay-color',
				type: 'string',
				default: `'rgb(33, 33, 33)'`,
				description: 'La couleur de l’arrière-plan de la boîte de dialogue.'
			},
			{
				name: 'overlay-opacity',
				type: 'number',
				default: `0.6`,
				description: 'L’opacité de l’arrière-plan de la boîte de dialogue.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: 'undefined',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `{
	card: 'VCard',
	cardTitle: 'VCardTitle',
	spacer: 'VSpacer',
	closeBtn: 'VBtn',
	icon: 'VIcon',
	cardActions: 'VCardActions',
	actionsSpacer: 'VSpacer',
	cancelBtn: 'VBtn',
	confirmBtn: 'VBtn'
}`
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu entre le titre et les boutons d’actions.'
			},
			{
				name: 'title',
				description: 'Slot pour remplacer le titre.'
			},
			{
				name: 'actions',
				description: 'Slot pour remplacer les boutons d’actions.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la visibilité de la boîte de dialogue est modifiée.',
				value: 'boolean'
			},
			{
				name: 'cancel',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Annuler*.',
				value: undefined
			},
			{
				name: 'confirm',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Valider*.',
				value: undefined
			}
		]
	}
};
