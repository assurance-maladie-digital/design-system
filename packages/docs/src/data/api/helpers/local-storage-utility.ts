import { Api } from '~/types';

export const api: Api = {
	localStorageUtility: {
		functions: [
			{
				name: 'getItem',
				description: 'Récupère un item du localStorage.',
				signature: '(key: string): string | null'
			},
			{
				name: 'setItem',
				description: 'Ajoute un item au localStorage.',
				signature: '(key: string, value: string): void'
			},
			{
				name: 'removeItem',
				description: 'Supprime un item du localStorage.',
				signature: '(key: string): void'
			},
			{
				name: 'clear',
				description: 'Vide le localStorage.',
				signature: '(): void'
			},
			{
				name: 'getAll',
				description: 'Récupère tous les items du localStorage.',
				signature: '(): string[]'
			}
		]
	}
};
