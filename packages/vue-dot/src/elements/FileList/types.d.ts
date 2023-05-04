export type FileState = 'initial' | 'success' | 'error' | 'viewing';

export interface FileItem {
	id?: string;
	title?: string;
	state: FileState;
	name?: string;
	optional?: boolean;
}

export interface IconInfo {
	icon: string;
	color: string;
}
