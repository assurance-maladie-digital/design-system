import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

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
		}
	}
});

const MixinsDeclaration = mixins(Props, UpdateFileModel);

@Component<UploadWorkflowCore>({
	watch: {
		value: {
			handler(): void {
				this.setInternalModel();
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
	error = false;
	inlineSelect = false;
	unrestricted = false;

	uploadedFile: File | File[] | null = null;

	get uploadedFiles(): File[] {
		if (!this.uploadedFile) {
			return [];
		}

		if (Array.isArray(this.uploadedFile)) {
			return this.uploadedFile;
		}

		return [this.uploadedFile];
	}

	selectedItem = '';

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
			//
			return;
		}

		const index = this.internalFileListItems.findIndex((file) => file.id === this.selectedItem);

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

	emitChangeEvent(): void {
		this.$nextTick(() => {
			this.$emit('change', this.fileList);
		});
	}

	emitViewFileEvent(file: FileListItem): void {
		this.$nextTick(() => {
			this.$emit('view-file', file);
		});
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
