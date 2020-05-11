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

export const dataListItemsAction1: IDataListItem[] = [
    {
        key: 'Libellé',
        value: 'Texte saisi'
    },
    {
        key: 'Libellé',
        value: 'Texte saisi',
        action: 'Modifier'
    }
];

export const dataListItemsAction2: IDataListItem[] = [
    {
        key: 'Libellé',
        value: 'Texte saisi',
        action: 'Modifier'
    },
    {
        key: 'Libellé',
        value: 'Texte saisi'
    }
];

export const dataLists: IDataList[] = [
    {
        title: 'Catégorie 1',
        items: dataListItems
    },
    {
        title: 'Catégorie 2',
        items: dataListItemsAction1
    },
    {
        title: 'Catégorie 3',
        items: dataListItemsAction2
    },
    {
        title: 'Catégorie 4',
        items: dataListItems
    }
];