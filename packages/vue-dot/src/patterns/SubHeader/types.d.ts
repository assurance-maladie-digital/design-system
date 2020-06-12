import { IDataList } from '../../elements/DataList/types';

export interface IDataListAction {
	dataListIndex: number;
	itemIndex: number;
}

export interface DataListsItem {
	title?: string;
	itemsNumberLoading?: number;
	headingLoading?: boolean;
	items: IDataList;
	headingLoading?: boolean;
	itemsNumberLoading?: number;
}
