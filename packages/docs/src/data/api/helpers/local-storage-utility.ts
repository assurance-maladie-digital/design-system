import { Api } from '~/types';

export const api: Api = {
	localStorageUtility: {
		functions: [
			{
				name: 'key',
				description: 'Récupère la clé d’un item du localStorage.',
				signature: '(n: number): string'
			},
			{
				name: 'getItem',
				description: 'Récupère un item du localStorage.',
				signature: '(key: string): T | null'
			},
			{
				name: 'setItem',
				description: 'Ajoute un item au localStorage.',
				signature: '(key: string, value: T): void'
			},
			{
				name: 'removeItem',
				description: 'Supprime un item du localStorage.',
				signature: '(key: string): void'
			},
			{
				name: 'clear',
				description: 'Supprime tous les items du localStorage.',
				signature: '(): void'
			},
			{
				name: 'getAll',
				description: 'Récupère tous les items du localStorage.',
				signature: '(): any[]'
			}
		]
	}
};
