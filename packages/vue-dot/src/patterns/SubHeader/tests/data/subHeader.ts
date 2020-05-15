import { IDataList } from '../../../../elements/DataList/types';
import { DataListsItem } from '../../types';

export const dataListItems: IDataList = [
	{
		label: 'Libellé',
		value: 'Texte saisi'
	},
	{
		label: 'Libellé',
		value: 'Texte saisi'
	}
];

export const dataListItemsActions: IDataList = [
	{
		label: 'Libellé',
		value: 'Texte à modifier',
		action: 'Modifier'
	},
	{
		label: 'Libellé',
		value: 'Texte à modifier',
		action: 'Modifier'
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
