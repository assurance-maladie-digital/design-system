import { Api } from '~/types';

export const api: Api = {
	NotFoundPage: {
		props: [
			{
				name: 'page-title',
				type: 'string',
				required: true,
				description: 'Le titre de la page.',
			},
			{
				name: 'message',
				type: 'string',
				required: true,
				description: 'Le message d’erreur à afficher à l’utilisateur.',
			},
			{
				name: 'btn-text',
				type: 'string',
				default: `'Retour à l’accueil'`,
				description: 'Le message du bouton d’action.',
			},
			{
				name: 'btn-route',
				type: 'RawLocation',
				default: `{ name: 'home' }`,
				description: 'La valeur de la prop `to` du bouton d’action.',
			}
		],
		slots: [
			{
				name: 'illustration',
				description: 'Slot pour remplacer l’illustration par défaut.'
			}
		]
	}
};
