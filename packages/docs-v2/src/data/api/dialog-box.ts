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
				description: 'Le texte du bouton Annuler.'
			},
			{
				name: 'confirm-btn-text',
				type: 'string',
				default: `'Valider'`,
				description: 'Le texte du bouton Valider.'
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
				description: 'Slot pour ajouter du contenu entre le titre et les boutons d\'actions.'
			},
			{
				name: 'title',
				description: 'Slot pour remplacer le titre par défaut.'
			},
			{
				name: 'actions',
				description: 'Slot pour remplacer les boutons d\'actions par défaut.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la boîte de dialogue apparaît et disparaît.',
				value: undefined
			},
			{
				name: 'cancel',
				description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Annuler.',
				value: undefined
			},
			{
				name: 'confirm',
				description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Valider.',
				value: undefined
			}
		]
	}
  };
