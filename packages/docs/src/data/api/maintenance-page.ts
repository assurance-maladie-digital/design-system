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
			}
		],
		slots: [
			{
				name: 'content',
				description: 'Slot pour afficher du contenu supplémentaire.'
			},
			{
				name: 'illustration',
				description: 'Slot pour remplacer l’illustration par défaut.'
			}
		]
	}
};
