import { Api } from '~/types';

const NotificationTypes = {
	name: 'NotificationTypes',
	type: 'string',
	required: true,
	description: 'Défini le type de la notifitication',
	example: `'success' | 'error' | 'info' | 'warning'`
};

export const api: Api = {
	Notifications: {
		props: [
			{
				...NotificationTypes,
				required: false
			},
		],
	}
};
