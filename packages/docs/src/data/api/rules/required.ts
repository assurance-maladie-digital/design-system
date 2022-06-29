import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	required: {
		arguments: [
			...ruleMessages(`{
	default: 'Le champ est requis.'
}`)
		]
	}
};
