import { FileState } from './FileList/types';

export interface FileListItem {
	id: string;
	title: string;
	state?: FileState;
	name?: string;
	file?: File;
	optional?: boolean;
}

export type SelectedFile = Required<FileListItem>;

export interface SelectItem {
	text: string;
	value: string;
}
