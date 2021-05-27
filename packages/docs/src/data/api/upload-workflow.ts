import { Api } from '~/types';

import { widthable } from './mixins/widthable';
import { customizable } from './mixins/customizable';

export const api: Api = {
	UploadWorkflow: {
		props: [
			{
				name: 'value',
				type: 'FileListItem[]',
				required: true,
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
			...widthable,
			...customizable(`{
	fileUpload: 'FileUpload',
	dialog: 'DialogBox',
	form: 'VForm',
	select: 'VSelect',
	fileList: 'FileList'
}`)
		],
		slots: [
			{
				name: 'title',
				description: 'Slot pour remplacer le titre.'
			},
			{
				name: 'modal-title',
				description: 'Slot pour remplacer le titre de la boîte de dialogue.'
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
				description: `Événement émis lorsque lorsqu'il y a une erreur de validation.`,
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
	},
	FileList: {
		props: [
			{
				name: 'files',
				type: 'FileItem[]',
				required: true,
				description: 'La liste des fichiers à afficher.',
				example: `{
	id: string;
	title: string;
	state: FileState;
	name?: string;
	optional?: boolean;
}`
			},
			{
				name: 'show-view-btn',
				type: 'boolean',
				default: false,
				description: 'Affiche le bouton *Afficher le fichier*.'
			},
			{
				name: 'hide-last-divider',
				type: 'boolean',
				default: false,
				description: 'Masque la dernière ligne de séparation de la liste.'
			},
			...widthable,
			...customizable(`{
	list: 'VList',
	listItem: 'VListItem',
	listItemAvatar: 'VListItemAvatar',
	listItemAvatarIcon: 'VIcon',
	listItemContent: 'VListItemContent',
	listItemTitle: 'VListItemTitle',
	listItemSubtitle: 'VListItemSubtitle',
	listItemAction: 'VListItemAction',
	layout: 'VLayout',
	retryBtn: 'VBtn',
	viewFileBtn: 'VBtn',
	deleteFileBtn: 'VBtn',
	icon: 'VIcon',
	divider: 'VDivider'
}`)
		],
		events: [
			{
				name: 'retry',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Réessayer*, retourne l’id du fichier sélectionné.',
				value: 'string'
			},
			{
				name: 'delete-file',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Supprimer*, retourne l’id du fichier sélectionné.',
				value: 'string'
			},
			{
				name: 'view-file',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Afficher le fichier*, retourne le fichier sélectionné.',
				value: 'FileItem'
			}
		]
	}
};
