import { Options } from '../../mixins/customizable';

export interface IDataListItem {
	label: string;
	value?: string;
	action?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
}

export type IDataList = IDataListItem[];

export interface DataListIcons {
	[key: string]: string;
}
