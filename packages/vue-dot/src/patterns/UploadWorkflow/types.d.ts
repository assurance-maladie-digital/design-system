import { Refs } from '../../types';
import FileUpload from '../FileUpload';

export type UploadWorkflowRefs = Refs<{
	fileUpload: FileUpload;
	form: HTMLFormElement;
}>;

export interface FileListItem {
	id: string;
	title: string;
	state?: string;
	name?: string;
	file?: File;
}

export interface SelectItem {
	text: string;
	value: string;
}
