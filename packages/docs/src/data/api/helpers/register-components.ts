import { Api } from '~/types';

export const api: Api = {
	registerComponents: {
		arguments: [
			{
				name: 'Vue',
				description: 'L’instance de Vue sur laquelle enregistrer les composants.',
				type: 'VueConstructor',
				required: true
			},
			{
				name: 'components',
				description: 'Les composants à enregistrer.',
				type: 'Components',
				required: true
			}
		],
		returnValue: [
			{
				type: 'void'
			}
		]
	}
};
