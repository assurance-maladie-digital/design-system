import { Api } from '~/types';

const NotificationTypes = {
	name: 'NotificationTypes',
	type: 'string',
	required: true,
	description: 'Défini le type de la notifitication',
	example: `'success' | 'error' | 'info' | 'warning'`
};

export const api: Api = {
	addNotification: {
		arguments: [
			{
				name: 'notification',
				description: 'Les options de la notifcation.',
				type: 'NotificationObj',
				required: true,
				example: `type: 'success' | 'error' | 'info' | 'warning';
message: string;
icon?: string;
ref?: string;`
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	},
	clearNotification: {
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
