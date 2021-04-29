import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { UpdateFileModel } from './updateFileModel';

import { Refs } from '../../../types';
import { FileListItem, SelectItem } from '../types';

import FileUpload from '../../FileUpload';

const Props = Vue.extend({
	props: {
		/** The v-model value (the list of files) */
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
	// Props.value
	value!: FileListItem[];

	// Extend $refs
	$refs!: Refs<{
		fileUpload: FileUpload;
		form: HTMLFormElement;
	}>;

	/** The VDialog v-model */
	dialog = false;

	error = false;

	/** The FileUpload v-model */
	uploadedFile: File | null = null;

	/** The VSelect v-model */
	selectedItem = '';

	/** If there is only one file in the list, we're in single mode */
	get singleMode(): boolean {
		return this.fileList.length === 1;
	}

	/** The list of items for the VSelect */
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

	/**
	 * Set the file and it's properties in
	 * the list and emit change event
	 */
	setFileInList(): void {
		// Set the state of the file
		this.updateFileModel(this.selectedItem, 'state', this.error ? 'error' : 'success');

		// Only set name & file when no error (when uploadedFile is not null)
		if (this.uploadedFile) {
			this.updateFileModel(this.selectedItem, 'name', this.uploadedFile.name);
			this.updateFileModel(this.selectedItem, 'file', this.uploadedFile);
		}

		// Reset error
		this.error = false;

		this.emitChangeEvent();
	}

	/** Reset a file from the list */
	resetFile(id: string): void {
		// Reset the state
		this.updateFileModel(id, 'state', 'initial');
		// Clear name and file
		this.updateFileModel(id, 'name', undefined);
		this.updateFileModel(id, 'file', undefined);

		this.emitChangeEvent();
	}

	/** Update v-model */
	emitChangeEvent(): void {
		// Emit in next tick to respect event order
		this.$nextTick(() => {
			this.$emit('change', this.fileList);
		});
	}

	emitViewFileEvent(file: FileListItem): void {
		// Emit in next tick to respect event order
		this.$nextTick(() => {
			this.$emit('view-file', file);
		});
	}

	/** Validate the form and call setFileInList */
	dialogConfirm(): void {
		// Validate the form in the dialog
		if (this.$refs.form.validate()) {
			// Close the dialog
			this.dialog = false;

			this.setFileInList();

			// Reset the form
			this.$refs.form.reset();
		}
	}

	/** Open the dialog or call setFileInList */
	fileSelected(): void {
		// If in single mode
		if (this.singleMode) {
			// Set the select v-model to the first item
			this.selectedItem = this.selectItems[0].value;
			this.setFileInList();
		} else {
			// Else, open dialog to let the user choose the type of the file
			this.dialog = true;
		}
	}

	/** Emit error event */
	uploadError(error: ErrorEvent): void {
		this.error = true;
		// Reset file (if previously selected)
		this.uploadedFile = null;

		this.setFileInList();

		// Pass the default FileUpload error
		this.$nextTick(() => {
			this.$emit('error', error);
		});

		this.error = false;
	}
}
