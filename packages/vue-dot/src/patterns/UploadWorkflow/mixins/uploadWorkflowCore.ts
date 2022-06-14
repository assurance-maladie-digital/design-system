import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { UpdateFileModel } from './updateFileModel';

import { Refs } from '../../../types';
import { FileListItem, SelectItem, FileItem } from '../types';

import FileUpload from '../../FileUpload';

const Props = Vue.extend({
	props: {
		value: {
			type: Array as PropType<FileItem[]>,
			default: () => ([])
		},
		fileListItems: {
			type: Array as PropType<FileListItem[]>,
			default: () => ([])
		}
	}
});

const MixinsDeclaration = mixins(Props, UpdateFileModel);

@Component<UploadWorkflowCore>({
	watch: {
		value: {
			handler(): void {
				this.initFileList(this.fileListItems);
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

	get singleMode(): boolean {
		return this.fileList.length === 1;
	}

	get selectItems(): SelectItem[] {
		const items: SelectItem[] = [];

		this.value.forEach((file) => {
			items.push({
				text: file.title,
				value: file.id
			});
		});

		return items;
	}

	setFileInList(): void {
		let index: number;
		if (this.fileListItems) {
			index = this.fileList.findIndex((file) => file.id === this.selectedItem);

			if (index === -1) {
				return;
			}
		} else {
			this.fileList.push({});
			index = this.fileList.length;
		}

		this.updateFileModel(index, 'state', this.error ? 'error' : 'success');

		if (this.uploadedFile) {
			this.updateFileModel(index, 'name', this.uploadedFile.name);
			this.updateFileModel(index, 'file', this.uploadedFile);
		}

		this.error = false;

		this.emitChangeEvent();
	}

	/** Reset a file from the list */
	resetFile(index: number): void {
		if (this.fileListItems) {
			this.$delete(this.fileList, index);
		} else {
			this.updateFileModel(index, 'state', 'initial');
			this.updateFileModel(index, 'name', undefined);
			this.updateFileModel(index, 'file', undefined);
		}

		this.emitChangeEvent();
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
		if (!this.fileListItems.length && this.uploadedFile) {
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

		this.error = false;
	}
}
