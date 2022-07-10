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
		}
	}
});

const MixinsDeclaration = mixins(Props, UpdateFileModel);

@Component<UploadWorkflowCore>({
	watch: {
		value: {
			handler(): void {
				if (this.fileListItems === null && !this.value.length) {
					this.resetInternalModel();
				}

				if (this.internalFileListItems.length) {
					this.initFileList(this.internalFileListItems);
				}
			},
			immediate: true,
			deep: true
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

	uploadedFile: File | null = null;

	selectedItem = '';

	internalFileListItems = this.fileListItems ?? this.value;

	get singleMode(): boolean {
		return this.fileList.length === 1;
	}

	get selectItems(): SelectItem[] {
		if (!this.internalFileListItems.length) {
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

	setFileInList(): void {
		if (!this.internalFileListItems.length) {
			return;
		}

		const index = this.internalFileListItems.findIndex((file) => file.id === this.selectedItem);

		if (index === -1) {
			return;
		}

		this.updateFileModel(index, 'state', this.error ? 'error' : 'success');

		if (this.uploadedFile) {
			this.updateFileModel(index, 'name', this.uploadedFile.name);
			this.updateFileModel(index, 'file', this.uploadedFile);
		}

		this.error = false;

		this.emitChangeEvent();
	}

	resetFile(index: number): void {
		if (!this.internalFileListItems.length) {
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

		if (this.$refs.form.validate()) {
			this.dialog = false;
			this.setFileInList();
			this.$refs.form.reset();
		}
	}

	fileSelected(): void {
		if (!this.internalFileListItems.length && this.uploadedFile) {
			this.fileList.push(this.uploadedFile);
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
