import { Api } from '~/types';

export const api: Api = {
	localStorageUtility: {
		arguments: [
			{
				name: 'constructor()',
				description: 'Constructor',
				type: 'LocalStorageUtilityConstructor',
				required: true
			},
			{
				name: 'getItem()',
				description: 'Récupère un item du localStorage.',
				type: 'string',
				required: true
			},
			{
				name: 'setItem()',
				description: 'Ajoute un item au localStorage.',
				type: 'string',
				required: true
			},
			{
				name: 'removeItem()',
				description: 'Supprime un item du localStorage.',
				type: 'string',
				required: true
			},
			{
				name: 'clear()',
				description: 'Vide le localStorage.',
				type: 'void',
				required: true
			},
		],
		returnValue: [
			{
				type: 'LocalStorageUtility'
			}
		],
	},
};
