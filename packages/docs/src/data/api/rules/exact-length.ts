import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	exactLength: {
		arguments: [
			{
				name: 'lengthValue',
				type: 'number',
				description: 'La longueur exacte du champ.',
				required: true
			},
			{
				name: 'ignoreSpaces',
				type: 'boolean',
				description: 'Ignore les espaces dans le calcul de la longueur.',
				default: false
			},
			...ruleMessages(`{
	default: (length: number) => \`La longueur du champ doit être de \${length} caractères.\`
}`)
		]
	}
};
