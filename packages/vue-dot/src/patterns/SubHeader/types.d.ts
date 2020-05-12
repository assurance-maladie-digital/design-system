import { IDataList } from '../../elements/DataList/types';

export interface ISubHeader {
	titleText: string;
	dataLists?: IDataList[];
	subTitleText?: string;
	backBtnText?: string;
	hideBackBtn?: string;
	loading?: boolean;
}

export interface IDataListAction {
	list: number;
	item: number;
}
