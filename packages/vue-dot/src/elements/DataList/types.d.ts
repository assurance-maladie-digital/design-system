import { Options } from '../../mixins/customizable';

export interface DataListItem {
	key: string;
	value?: string | number;
	action?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
}

export type DataList = DataListItem[];

export interface DataListIcons {
	[iconName: string]: string;
}
