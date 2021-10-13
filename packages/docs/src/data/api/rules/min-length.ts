import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	minLength: {
		arguments: [
			{
				name: 'min',
				type: 'number',
				description: 'La longueur minimale du champ.',
				required: true
			},
			...ruleMessages(`{
	default: (length: number) => \`La longueur minimale du champ doit être de \${min} caractères.\`
}`)
		]
	}
};
