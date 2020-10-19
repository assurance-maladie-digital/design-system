import { DataList } from '../../elements/DataList/types';

export interface IDataListAction {
	dataListIndex: number;
	itemIndex: number;
}

export interface DataListsItem {
	title?: string;
	items: DataList;
	headingLoading?: boolean;
	itemsNumberLoading?: number;
}
