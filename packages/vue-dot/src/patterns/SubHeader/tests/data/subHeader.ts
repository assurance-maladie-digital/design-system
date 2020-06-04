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
		action: 'Modifier'
	},
	{
		key: 'Libellé',
		value: 'Texte à modifier',
		action: 'Modifier'
	}
];

export const dataLists: DataListsItem[] = [
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
