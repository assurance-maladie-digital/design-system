import { Api } from '~/types';

export const api: Api = {
	MaintenancePage: {
		props: [
			{
				name: 'page-title',
				type: 'string',
				default: `'Maintenance en cours'`,
				description: 'Le titre de la page.',
			},
			{
				name: 'message',
				type: 'string',
				default: `'L’application n’est pas disponible pour le moment, veuillez nous excuser pour la gêne occasionnée.'`,
				description: 'Le message de maintenance à afficher à l’utilisateur.',
			},
			{
				name: 'btn',
				type: 'boolean',
				default: false,
				description: 'Affiche un bouton d’action.'
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
