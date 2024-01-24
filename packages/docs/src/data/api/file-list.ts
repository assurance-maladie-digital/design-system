import { Api } from '~/types';

import { widthable } from './shared/mixins/widthable';
import { customizable } from './shared/mixins/customizable';

export const api: Api = {
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
				name: 'hide-upload-btn',
				type: 'boolean',
				default: false,
				description: 'Masque le bouton *Téléverser*.'
			},
			{
				name: 'show-view-btn',
				type: 'boolean',
				default: false,
				description: 'Affiche le bouton *Afficher le fichier*.'
			},
			{
				name: 'always-show-delete-btn',
				type: 'boolean',
				default: false,
				description: 'Affiche toujours le bouton *Supprimer*.'
			},
			{
				name: 'hide-delete-btn',
				type: 'boolean',
				default: false,
				description: 'Masque le bouton *Supprimer*.'
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
	retryBtn: 'VBtn',
	viewFileBtn: 'VBtn',
	deleteFileBtn: 'VBtn',
	icon: 'VIcon',
	divider: 'VDivider'
}`)
		],
		events: [
			{
				name: 'upload',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Téléverser*, retourne la propriété `id` du fichier sélectionné.',
				value: 'string'
			},
			{
				name: 'retry',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Réessayer*, retourne la position du fichier sélectionné dans la liste.',
				value: 'number'
			},
			{
				name: 'delete-file',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Supprimer*, retourne la position du fichier sélectionné dans la liste.',
				value: 'number'
			},
			{
				name: 'view-file',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Afficher le fichier*, retourne le fichier sélectionné.',
				value: 'FileItem'
			}
		]
	}
};
