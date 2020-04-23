import { Options } from '../../mixins/customizable';

export interface IDataListItem {
	key: string;
	value?: string;
	chip?: boolean;
	icon?: string;
	options?: Options;
}

export interface DataListIcons {
	[key: string]: string;
}
