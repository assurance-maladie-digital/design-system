import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	notBeforeToday: {
		arguments: [
			...ruleMessages(`{
	default: \`La date doit être postérieure à aujourd’hui.\`
}`)
		]
	}
};
