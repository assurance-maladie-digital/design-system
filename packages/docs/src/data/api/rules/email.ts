import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	email: {
		arguments: [
			...ruleMessages(`{
	default: 'Le format de l’adresse email n’est pas valide.'
}`)
		]
	}
};
