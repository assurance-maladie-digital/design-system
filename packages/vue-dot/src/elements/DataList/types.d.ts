import { Options } from '../../mixins/customizable';

export interface IDataListItem {
	key: string;
	value?: string;
	action?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
}

export type IDataList = IDataListItem[];

export interface DataListIcons {
	[iconName: string]: string;
}
