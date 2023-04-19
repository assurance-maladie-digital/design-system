import { Api } from '~/types';

export const api: Api = {
	FilePreview: {
		props: [
			{
				name: 'file',
				type: 'File',
				required: true,
				description: 'Fichier au format PDF, JPG, JPEG ou PNG'
			}
		]
	}
};
