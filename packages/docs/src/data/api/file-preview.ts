import { Api } from '~/types';

export const api: Api = {
	FilePreview: {
		props: [
			{
				name: 'file',
				type: 'File | Blob',
				default: null,
				description: 'Le fichier à afficher.'
			},
			{
				name: 'options',
				type: 'Options',
				default: '{}',
				description: 'Les propriétés à appliquer aux éléments `<object>` et `<image>`.<br>Par défaut, l’image a une description vide.',
				example: `{
	pdf: 'object',
	image: 'image'
}`
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer le message par défaut lorsqu’un type de fichier n’est pas supporté.'
			}
		]
	}
};
