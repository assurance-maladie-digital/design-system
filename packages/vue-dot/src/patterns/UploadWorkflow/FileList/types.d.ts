export type FileState = 'initial' | 'success' | 'error';

export interface FileItem {
	id: string;
	title: string;
	state: FileState;
	name?: string;
}

export interface IconInfo {
	icon: string;
	color: string;
}
