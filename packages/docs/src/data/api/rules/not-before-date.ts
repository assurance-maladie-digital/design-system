import { Api } from '~/types';
import { ruleMessages } from '../shared/ruleMessages';

export const api: Api = {
	notBeforeDate: {
		arguments: [
			{
				name: 'date',
				type: 'string',
				description: 'La date limite au format `DD/MM/YYYY`.',
				required: true
			},
			...ruleMessages(`{
	default: (date: string) => \`La date doit être postérieure au \${date}\`.
}`)
		]
	}
};
