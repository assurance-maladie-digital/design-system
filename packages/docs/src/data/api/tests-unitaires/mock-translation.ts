import { Api } from '~/types';

export const api: Api = {
	mockTranslation: {
		typeArguments: [
			{
				name: 'T',
				description: 'Le type des données qui peuvent êtres renvoyées pour les traductions',
				required: true
			}
		],
		arguments: [
			{
				name: 'traductions',
				description: 'La traduction a mock.',
				type: 'IndexedObject<T>',
				required: true
			}
		],
		returnValue: [
			{
				type: `
{
	$t: (key: string) => T
}`
			}
		]
	}
};
