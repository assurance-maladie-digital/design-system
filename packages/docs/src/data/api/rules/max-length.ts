import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	maxLength: {
		arguments: [
			{
				name: 'max',
				type: 'number',
				description: 'La longueur maximale du champ.',
				required: true
			},
			{
				name: 'ignoreSpaces',
				type: 'boolean',
				description: 'Ignore les espaces dans le calcul de la longueur.',
				default: false
			},
			...ruleMessages(`{
	default: (max: number) => \`La longueur maximale du champ doit être de \${max} caractères.\`
}`)
		]
	}
};
