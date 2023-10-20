import { FileState } from '../../elements/FileList/types';

export interface FileListItem {
	id: string;
	title: string;
	state?: FileState;
	name?: string;
	file?: File;
	optional?: boolean;
	[key: string]: any;
}

export type SelectedFile = Required<FileListItem>;

export interface SelectItem {
	text: string;
	value: string;
}
