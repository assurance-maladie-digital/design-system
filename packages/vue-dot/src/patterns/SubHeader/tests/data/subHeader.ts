import { IDataList } from '../../../../elements/DataList/types';
import { DataListsItem } from '../../types';

export const dataListItems: IDataList = [
	{
		key: 'Libellé',
		value: 'Texte saisi'
	},
	{
		key: 'Libellé',
		value: 'Texte saisi'
	}
];

export const dataListItemsActions: IDataList = [
	{
		key: 'Libellé',
		value: 'Texte à modifier',
		action: 'Edit'
	},
	{
		key: 'Libellé',
		value: 'Texte à modifier',
		action: 'Edit'
	}
];

export const dataLists: DataListsItem[] = [
	{
		title: 'Catégorie 1',
		items: dataListItems
	},
	{
		title: 'Catégorie 2',
		items: dataListItemsActions
	},
	{
		title: 'Catégorie 3',
		items: dataListItems
	},
	{
		title: 'Catégorie 4',
		items: dataListItems
	}
];
