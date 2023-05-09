export type FileState = 'initial' | 'success' | 'error' | 'download';
export type FileType = 'pdf' | 'word' | 'excel' | 'powerpoint' | 'image' | 'video' | 'audio' | 'archive' | 'text' | 'other';

export interface FileItem {
	id?: string;
	title?: string;
	state?: FileState;
	type?: FileType;
	name?: string;
	optional?: boolean;
}

export interface IconInfo {
	icon: string;
	color: string;
}
