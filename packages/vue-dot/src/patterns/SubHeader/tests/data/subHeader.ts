import { IDataListItem, IDataList } from './../../../../elements/DataList/types';

export const dataListItems: IDataListItem[] = [
    {
        key: 'Libellé',
        value: 'Texte saisi'
    },
    {
        key: 'Libellé',
        value: 'Texte saisi'
    }
];

export const dataListItemsActions: IDataListItem[] = [
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

export const dataLists: IDataList[] = [
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