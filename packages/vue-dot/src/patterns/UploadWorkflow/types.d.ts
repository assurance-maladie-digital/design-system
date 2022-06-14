import { FileState } from './FileList/types';

export interface FileListItem {
	id?: string;
	title?: string;
	state?: FileState;
	name?: string;
	file?: File;
}

export interface FileItem {
	id: string;
	title: string;
}
export interface SelectItem {
	text: string;
	value: string;
}
