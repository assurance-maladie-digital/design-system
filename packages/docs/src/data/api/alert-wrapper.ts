import { Api } from '~/types';

export const api: Api = {
	AlertWrapper: {
		props: [
			{
				name: 'type',
				type: 'string',
				description: 'Type de l’alerte.',
				default: 'info',
				example: `'info' | 'success' | 'warning' | 'error'`
			},
			{
				name: 'dismissible',
				type: 'boolean',
				description: 'Ajoute un bouton pour fermer l’alerte.',
				default: false
			},
			{
				name: 'outlined',
				type: 'boolean',
				description: 'Affiche l’alerte avec un contour et sans fond de couleur.',
				default: false
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour ajouter du contenu à l’alerte.'
			}
		],
		events: [
			{
				name: 'input',
				description: 'Événement émit lorsque le modèle est mise à jour.',
				value: 'boolean'
			}
		]
	}
};
