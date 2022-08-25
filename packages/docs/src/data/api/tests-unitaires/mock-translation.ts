import { Api } from '~/types';

export const api: Api = {
	mockTranslations: {
		typeArguments: [
			{
				name: 'T',
				description: 'Le type des données qui peuvent êtres renvoyées pour les traductions.',
				required: true
			}
		],
		arguments: [
			{
				name: 'traductions',
				description: 'La liste des traductions à mocker.',
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
