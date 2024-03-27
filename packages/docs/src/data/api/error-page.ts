import { Api } from '~/types';

export const api: Api = {
	ErrorPage: {
		props: [
			{
				name: 'page-title',
				type: 'string',
				default: 'undefined',
				description: 'Le titre de la page.'
			},
			{
				name: 'message',
				type: 'string',
				default: 'undefined',
				description: 'Le message d’erreur à afficher à l’utilisateur.'
			},
			{
				name: 'code',
				type: 'string',
				default: 'undefined',
				description: 'Le code HTTP de l’erreur.'
			},
			{
				name: 'codeErrorText',
				type: 'string',
				default: `'Code d’erreur\xa0:'`,
				description: 'Le texte à afficher avant le code d’erreur pour les liseuses d’écran.'
			},
			{
				name: 'btn-text',
				type: 'string',
				default: `'Retour à l’accueil'`,
				description: 'Le message du bouton d’action.'
			},
			{
				name: 'btn-route',
				type: 'RawLocation',
				default: `{ name: 'home' }`,
				description: 'La valeur de la prop `to` du bouton d’action.'
			},
			{
				name: 'btn-href',
				type: 'string',
				default: 'undefined',
				description: 'La valeur de la prop `href` du bouton d’action.'
			},
			{
				name: 'no-btn',
				type: 'boolean',
				default: false,
				description: 'Masque le bouton d’action.'
			}
		],
		slots: [
			{
				name: 'additional-content',
				description: 'Contenu additionnel à afficher sous le message d’erreur.'
			},
			{
				name: 'action',
				description: 'Contenu à afficher à la place du bouton d’action.'
			},
			{
				name: 'illustration',
				description: 'Illustration à afficher en plus du contenu.'
			}
		]
	}
};
