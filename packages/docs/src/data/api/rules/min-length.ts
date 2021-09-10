import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	exactLength: {
		arguments: [
			{
				name: 'min',
				type: 'number',
				description: 'La longueur minimale de la valeur du champ.',
				required: true
			},
			...ruleMessages(`{
	default: (length: number) => \`La longueur minimale du champ est \${min} caractères.\`
}`)
		]
	}
};
