import { DataList } from '../../../../elements/DataList/types';
import { DataListGroupItems } from '../../../../patterns/DataListGroup/types';

export const dataListItems: DataList = [
	{
		key: 'Libellé',
		value: 'Texte saisi'
	},
	{
		key: 'Libellé',
		value: 'Texte saisi'
	}
];

export const dataListItemsActions: DataList = [
	{
		key: 'Libellé',
		value: 'Texte à modifier',
		action: 'Modifier'
	},
	{
		key: 'Libellé',
		value: 'Texte à modifier',
		action: 'Modifier'
	}
];

export const dataListGroupItems: DataListGroupItems = [
	{
		title: 'Catégorie 1',
		items: dataListItems,
		itemsNumberLoading: 2,
		headingLoading: true
	},
	{
		title: 'Catégorie 2',
		items: dataListItemsActions,
		itemsNumberLoading: 2,
		headingLoading: true
	}
];
