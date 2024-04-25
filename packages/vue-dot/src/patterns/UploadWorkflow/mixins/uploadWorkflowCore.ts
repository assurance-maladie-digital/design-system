import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import consola from 'consola';

import { UpdateFileModel } from './updateFileModel';

import { Refs } from '../../../types';
import { FileListItem, SelectedFile, SelectItem } from '../types';

import FileUpload from '../../FileUpload';
import { ErrorEvent } from '../../FileUpload/types';

const Props = Vue.extend({
	props: {
		value: {
			type: Array as PropType<File[] | SelectedFile[]>,
			default: () => ([])
		},
		fileListItems: {
			type: Array as PropType<FileListItem[]>,
			default: null
		},
		showFilePreview: {
			type: Boolean,
			default: false
		},
		showViewBtn: {
			type: Boolean,
			default: false
		}
	}
});

const MixinsDeclaration = mixins(Props, UpdateFileModel);

@Component<UploadWorkflowCore>({
	watch: {
		value: {
			handler(): void {
				// if unrestricted, do not set internal model
				if (this.unrestricted !== true) {
					this.setInternalModel();
				}
			},
			immediate: true,
			deep: true
		},
		fileListItems: {
			handler(): void {
				this.setInternalModel();
			}
		}
	}
})
export class UploadWorkflowCore extends MixinsDeclaration {
	$refs!: Refs<{
		fileUpload: FileUpload;
		form: HTMLFormElement;
	}>;

	dialog = false;
	previewDialog = false;
	error = false;
	inlineSelect = false;
	unrestricted = false;

	uploadedFile: File | File[] | null = null;
	fileToPreview: File | null = null;

	get uploadedFiles(): File[] {
		if (!this.uploadedFile) {
			return [];
		}

		if (Array.isArray(this.uploadedFile)) {
			return this.uploadedFile;
		}

		return [this.uploadedFile];
	}

	selectedItem: string | number = '';

	internalFileListItems = [] as FileListItem[];

	get singleMode(): boolean {
		return this.internalFileListItems.length === 1;
	}

	get selectItems(): SelectItem[] {
		if (this.unrestricted) {
			return [];
		}

		const items: SelectItem[] = this.internalFileListItems.map((file) => {
			return {
				text: file.title,
				value: file.id
			};
		});

		return items;
	}

	setInternalModel(): void {
		this.internalFileListItems = this.fileListItems ?? this.value;

		if (this.fileListItems === null && !this.value.length) {
			this.resetInternalModel();
		}

		if (this.internalFileListItems.length) {
			this.initFileList(this.internalFileListItems);
		} else {
			this.unrestricted = true;
		}
	}

	setFileInList(): void {
		if (this.unrestricted) {
			return;
		}

		const index = typeof this.selectedItem === 'number' ?
			this.selectedItem :
			this.internalFileListItems.findIndex((file) => file.id === this.selectedItem);

		if (index === -1) {
			return;
		}

		this.updateFileModel(index, 'state', this.error ? 'error' : 'success');

		if (this.uploadedFiles.length) {
			this.uploadedFiles.forEach((file) => {
				this.updateFileModel(index, 'name', file.name);
				this.updateFileModel(index, 'file', file);
			});
		}

		this.error = false;

		this.emitChangeEvent();
	}

	resetFile(index: number): void {
		if (this.unrestricted) {
			this.$delete(this.fileList, index);
		} else {
			this.updateFileModel(index, 'state', 'initial');
			this.updateFileModel(index, 'name', undefined);
			this.updateFileModel(index, 'file', undefined);
		}

		this.emitChangeEvent();
	}

	resetInternalModel(): void {
		this.fileList = [];
		this.internalFileListItems = [];
	}

	async emitChangeEvent(): Promise<void> {
		await this.$nextTick();
		this.$emit('change', this.fileList);
	}

	async previewFile(file: FileListItem | File): Promise<void> {
		if (!this.showViewBtn) {
			consola.warn('Using `vuetify-options` for this functionality is deprecated since v2.16.0, use the `show-view-btn` prop instead.');

			await this.$nextTick();
			this.$emit('view-file', file);
		}

		let fileToPreview: File | null = null;

		if ('file' in file && file.file) {
			// if file is of type FileListItem
			fileToPreview = file.file;
		} else if (file instanceof File) {
			// if file is of type File (free mode)
			fileToPreview = file;
		} else {
			return;
		}

		this.fileToPreview = fileToPreview;
		this.previewDialog = true;
	}

	async dialogConfirm(): Promise<void> {
		await this.$nextTick();

		if (this.showFilePreview && this.unrestricted && this.uploadedFiles.length) {
			this.fileList.push(...this.uploadedFiles);
			this.emitChangeEvent();
			this.dialog = false;

			return;
		}

		if (this.$refs.form.validate()) {
			this.dialog = false;
			this.setFileInList();
			this.$refs.form.reset();
		}
	}

	fileSelected(): void {
		this.error = false;

		if (this.showFilePreview) {
			if (this.singleMode) {
				this.selectedItem = this.selectItems[0].value;
			}

			this.dialog = true;

			return;
		}

		if (this.unrestricted && this.uploadedFiles.length) {
			this.fileList.push(...this.uploadedFiles);
			this.emitChangeEvent();

			return;
		}

		if (this.singleMode) {
			this.selectedItem = this.selectItems[0].value;
			this.setFileInList();

			return;
		}

		if (this.inlineSelect) {
			this.setFileInList();
			this.inlineSelect = false;
			this.selectedItem = '';

			return;
		}

		this.dialog = true;
	}

	async uploadError(error: ErrorEvent): Promise<void> {
		this.error = true;
		this.uploadedFile = null;

		this.setFileInList();

		await this.$nextTick();
		this.$emit('error', error);
	}
}
