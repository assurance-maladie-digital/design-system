import { Api } from '~/types';

export const api: Api = {
	addNotification: {
		arguments: [
			{
				name: 'notification',
				description: 'La notification à afficher.',
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
