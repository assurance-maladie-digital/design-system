import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	minLength: {
		arguments: [
			{
				name: 'max',
				type: 'number',
				description: 'La longueur maximale du champ.',
				required: true
			},
			...ruleMessages(`{
	default: (max: number) => \`La longueur maximale du champ est \${max} caractères.\`
}`)
		]
	}
};
