import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	matchPattern: {
		arguments: [
			{
				name: 'pattern',
				type: 'RegExp',
				description: 'L’expression régulière permettant de valider la valeur.',
			},
			...ruleMessages(`{
	default: 'Le format saisi ne correspond pas au format attendu.',
}`)
		]
	}
};
