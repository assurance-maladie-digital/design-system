import { Api } from '~/types';

export const api: Api = {
	vDebounce: {
		argument: [
			{
				name: 'value',
				type: 'function',
				description: 'Fonction exécutée après le délai.<br>Par défaut un événement `change` sera émit.',
				default: 'undefined'
			}
		],
		modifiers: [
			{
				name: 'time',
				type: 'number',
				description: 'Nombre de millisecondes à attendre avant d’appeler la fonction `value` ou d’émettre un événement.<br>Par défaut, la durée est de *500ms*.',
				snippet: '<input v-debounce.1000>'
			}
		]
	}
};
