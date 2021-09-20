import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	notAfterToday: {
		arguments: [
			...ruleMessages(`{
	default: (length: number) => \`La date doit être antérieure à aujourd’hui\`.
}`)
		]
	}
};
