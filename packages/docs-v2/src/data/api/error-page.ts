import { Api } from '~/types';

export const api: Api = {
	PageCard: {
		props: [
			{
				name: 'page-title',
				type: 'string',
				required: true,
				description: 'Le titre de la page.'
			},
			{
				name: 'message',
				type: 'string',
				required: true,
				description: 'Le message d\'erreur à afficher à l\'utilisateur.'
			},
			{
				name: 'code',
				type: 'string',
				default: undefined,
				description: 'Le code HTTP de l\'erreur.'
			},
			{
				name: 'btn-text',
				type: 'string',
				default: 'Retour à l\'accueil',
				description: 'Le message du bouton d\'action.'
			},
			{
				name: 'btn-route',
				type: 'Next',
				default: '{ name: \'home\' }',
				description: 'La valeur de la prop `to` du bouton d\'action.'
			},
			{
				name: 'no-btn',
				type: 'boolean',
				default: false,
				description: 'Désactive le bouton d\'action.'
			}
		]
	}
};
