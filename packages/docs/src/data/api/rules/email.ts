import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	email: {
		arguments: [
			...ruleMessages(`{
	default: 'L’email saisi est invalide.'
}`)
		]
	}
};
