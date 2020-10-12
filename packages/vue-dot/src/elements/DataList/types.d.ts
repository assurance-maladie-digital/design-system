import { Options } from '../../mixins/customizable';

export interface IDataListItem {
	key: string;
	value?: string | number;
	action?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
}

export type IDataList = IDataListItem[];

export interface DataListIcons {
	[iconName: string]: string;
}
