import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { UpdateFileModel } from './updateFileModel';

import { Refs } from '../../../types';
import { FileListItem, SelectItem } from '../types';

import FileUpload from '../../FileUpload';

const Props = Vue.extend({
	props: {
		value: {
			type: Array as PropType<FileListItem[]>,
			required: true
		}
	}
});

const MixinsDeclaration = mixins(Props, UpdateFileModel);

@Component<UploadWorkflowCore>({
	watch: {
		value: {
			handler(): void {
				this.initFileList(this.value);
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

		this.value.forEach((file: FileListItem) => {
			items.push({
				text: file.title,
				value: file.id
			});
		});

		return items;
	}

	setFileInList(): void {
		this.updateFileModel(this.selectedItem, 'state', this.error ? 'error' : 'success');

		if (this.uploadedFile) {
			this.updateFileModel(this.selectedItem, 'name', this.uploadedFile.name);
			this.updateFileModel(this.selectedItem, 'file', this.uploadedFile);
		}

		this.error = false;

		this.emitChangeEvent();
	}

	/** Reset a file from the list */
	resetFile(id: string): void {
		this.updateFileModel(id, 'state', 'initial');
		this.updateFileModel(id, 'name', undefined);
		this.updateFileModel(id, 'file', undefined);

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
