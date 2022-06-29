import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	UserMenuBtn: {
		props: [
			{
				name: 'full-name',
				type: 'string',
				required: true,
				description: 'Le prénom et le nom de l’utilisateur.'
			},
			{
				name: 'additional-information',
				type: 'string',
				default: 'undefined',
				description: 'Une information complémentaire à afficher.'
			},
			{
				name: 'label',
				type: 'string',
				default: `'Menu utilisateur'`,
				description: 'Le label accessible du bouton.'
			},
			{
				name: 'hide-user-icon',
				type: 'boolean',
				default: false,
				description: 'Masque l’icône du bouton.'
			},
			{
				name: 'hide-logout-btn',
				type: 'boolean',
				default: false,
				description: 'Masque le bouton `Déconnexion` dans le menu.'
			},
			...customizable(`{
	menu: 'VMenu',
	btn: 'VBtn',
	icon: 'VIcon',
	list: 'VList',
	logoutListItem: 'VListItem',
	logoutIcon: 'VIcon'
}`)
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu dans la liste du menu.'
			},
			{
				name: 'icon',
				description: 'Slot pour remplacer l’icône du bouton.'
			},
			{
				name: 'content',
				description: 'Slot pour remplacer le contenu du menu.'
			},
			{
				name: 'logout-item',
				description: 'Slot pour remplacer le bouton de déconnexion.'
			}
		],
		events: [
			{
				name: 'logout',
				description: 'Événement émis lorsque lors du clic sur le bouton `Déconnexion`.',
				value: undefined
			}
		]
	}
};
