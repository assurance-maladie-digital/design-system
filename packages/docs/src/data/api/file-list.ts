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
	state?: FileState;
	name?: string;
	optional?: boolean;
}`
			},
			{
				name: 'hide-last-divider',
				type: 'boolean',
				default: false,
				description: 'Masque la dernière ligne de séparation de la liste.'
			},
			{
				name: 'actions',
				type: 'boolean',
				default: false,
				description: 'Affiche les boutons d’action.'
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
	downloadFileBtn: 'VBtn',
	icon: 'VIcon',
	divider: 'VDivider'
}`)
		]
	}
};
