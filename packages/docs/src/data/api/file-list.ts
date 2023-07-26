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
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Réessayer*, retourne la propriété `id` du fichier sélectionné.',
				value: 'string'
			},
			{
				name: 'delete-file',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Supprimer*, retourne la propriété `id` du fichier sélectionné.',
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
