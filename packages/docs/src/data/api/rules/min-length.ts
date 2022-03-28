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
			{
				name: 'ignoreSpaces',
				type: 'boolean',
				description: 'Ignore les espaces dans le calcul de la longueur.',
				default: false
			},
			...ruleMessages(`{
	default: (length: number) => \`La longueur minimale du champ doit être de \${min} caractères.\`
}`)
		]
	}
};
