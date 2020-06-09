import Component, { mixins } from 'vue-class-component';

import { UpdateFileModel } from './updateFileModel';
import { Refs } from '../../../types';
import FileUpload from '../../FileUpload';

const MixinsDeclaration = mixins(UpdateFileModel);

@Component
export class EventsFileFired extends MixinsDeclaration {
	// Extend $refs
	$refs!: Refs<{
		fileUpload: FileUpload;
		form: HTMLFormElement;
	}>;

	/** The VDialog v-model */
	dialog = false;

	/** The FileUpload v-model */
	uploadedFile: File | null = null;

	error = false;

	/** The VSelect v-model */
	selectedItem = '';

	/**
	 * Set the file and it's properties in the list
	 * (emit change event)
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

		// Update v-model
		this.$emit('change', this.fileList);
	}

	/** Fired when the "delete" button is clicked in FileList */
	deleteFile(id: string): void {
		// Reset the state
		this.updateFileModel(id, 'state', 'initial');
		// Clear name and file
		this.updateFileModel(id, 'name', undefined);
		this.updateFileModel(id, 'file', undefined);
	}

	/** Fired when the "confirm" button in the dialog is pressed */
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
}
