import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	matchPattern: {
		arguments: [
			{
				name: 'pattern',
				type: 'RegExp',
				description: 'Le motif à respecter.'
			},
			{
				name: 'errorMessages',
				type: 'ErrorMessages<number>',
				description: 'Les messages d’erreur personnalisés.',
			},
			...ruleMessages(`{
				default: 'Le format saisi ne correspond pas.',
			}`)
		]
	}
};
