import { Api } from '~/types';

export const api: Api = {
	mockTranslation: {
		typeArguments: [
			{
				name: 'T',
				description: 'Le type des données renvoyées pour cette traduction',
				default: 'any'
			}
		],
		arguments: [
			{
				name: 'keyToMock',
				description: 'La traduction a mock.',
				type: 'string',
				required: true
			},
			{
				name: 'data',
				description: 'La valeur à renvoyer pour cette traduction.',
				type: 'string',
				required: true
			}
		],
		returnValue: [
			{
				type: 'IndexedObject<(key: string) => T | string>'
			}
		]
	}
};
