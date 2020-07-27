import Component, { mixins } from 'vue-class-component';

import { FileValidation } from './fileValidation';

import { Refs } from '../../../types';
import { HTMLInputEvent } from '../types';

const MixinsDeclaration = mixins(FileValidation);

@Component
export class FileUploadCore extends MixinsDeclaration {
	$refs!: Refs<{
		vdInputEl: HTMLInputElement;
	}>;

	/** For specific styles on hover with a file (dragover) */
	dragover = false;

	/** This function is executed when after a manual file selection */
	inputValueChanged(event: HTMLInputEvent): void {
		if (!event.target) {
			return;
		}

		const files = event.target.files;
		this.selfReset();

		// Don't do anything if no file selected
		if (!files || !files.length) {
			return;
		}

		// Stop if multiple files selected in single mode
		if (this.ifTooManyFiles(files)) {
			return;
		}

		for (let i = 0; i < files.length; i++) {
			this.validateFile(files[i]);
		}

		this.emitChangeEvent();
	}

	emitChangeEvent(): void {
		if (!this.error) {
			// Take the first file in single mode
			const eventValue = this.multiple ? this.files : this.files[0];

			this.$emit('change', eventValue);
		}

		// Reset file input
		// Do after everything for IE
		this.$refs.vdInputEl.value = '';
	}

	/** This function is executed when content is dropped on the component */
	dropHandler(e: DragEvent): void {
		this.selfReset();

		const data = e.dataTransfer;

		if (!data) {
			return;
		}

		const files = data.items || data.files;

		// Stop if multiple files selected in single mode
		if (this.ifTooManyFiles(files)) {
			return;
		}

		if (data.items) {
			// Use DataTransferItemList interface to access the file(s)
			for (let i = 0; i < data.items.length; i++) {
				// If dropped items aren't files, reject them
				if (data.items[i].kind === 'file') {
					const file = data.items[i].getAsFile();

					if (!file) {
						return;
					}

					this.validateFile(file);
				}
			}
		} else {
			// Use DataTransfer interface to access the file(s)
			for (let i = 0; i < data.files.length; i++) {
				this.validateFile(data.files[i]);
			}
		}

		this.emitChangeEvent();
	}

	/** Reset state to initial */
	selfReset(): void {
		this.dragover = false;
		this.error = false;

		// Clear previous files
		this.files = [];
	}
}
