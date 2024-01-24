import { Api } from '~/types';

import { widthable } from './shared/mixins/widthable';
import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	UploadWorkflow: {
		props: [
			{
				name: 'value',
				type: 'File[] | SelectedFile[]',
				default: `'[]'`,
				description: 'La liste des fichiers que l’utilisateur a sélectionné.',
				example: `File[] | {
	id: string;
	title: string;
	state?: FileState;
	name?: string;
	file?: File;
}[]`
			},
			{
				name: 'file-list-items',
				type: 'FileListItem[]',
				default: null,
				description: 'La liste des fichiers que l’utilisateur doit sélectionner.',
				example: `{
	id: string;
	title: string;
	state?: FileState;
	name?: string;
	file?: File;
}[]`
			},
			{
				name: 'section-title',
				type: 'string',
				default: `'Document(s) à nous transmettre.'`,
				description: 'Le titre de la section.'
			},
			{
				name: 'show-file-preview',
				type: 'boolean',
				default: false,
				description: 'Active la prévisualisation du fichier avant validation.'
			},
			{
				name: 'multiple',
				type: 'boolean',
				default: false,
				description: 'Active la sélection multiple.'
			},
			...widthable,
			...customizable(`{
	fileUpload: 'FileUpload',
	dialog: 'DialogBox',
	form: 'VForm',
	select: 'VSelect',
	fileList: 'FileList',
	filePreview: 'FilePreview'
}`, 'et `FileList`')
		],
		slots: [
			{
				name: 'title',
				description: 'Slot pour remplacer le titre.'
			},
			{
				name: 'modal-title',
				description: 'Slot pour remplacer le titre de la boîte de dialogue.'
			},
			{
				name: 'modal-description',
				description: 'Slot pour ajouter un texte supplémentaire après le titre dans la boîte de dialogue.'
			}
		],
		events: [
			{
				name: 'change',
				description: 'Événement émis lorsque la liste de fichiers est mise à jour.',
				value: 'File | File[]'
			},
			{
				name: 'error',
				description: 'Événement émis lorsque lorsqu’il y a une erreur de validation.',
				value: `{
	file: File,
	code: ErrorCodes
}`
			},
			{
				name: 'view-file',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Afficher le fichier*, retourne le fichier sélectionné.',
				value: 'FileItem'
			}
		]
	}
};
