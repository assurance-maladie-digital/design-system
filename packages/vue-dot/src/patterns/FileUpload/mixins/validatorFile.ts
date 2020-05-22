import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { locales } from '../locales';

import { ErrorCodes } from '../enum/errorCodes';

import { getFileExtension } from '../../../functions/getFileExtension';
import { calcHumanFileSize } from '../../../functions/calcHumanFileSize';

import { ErrorEvent } from '../types';

const Props = Vue.extend({
	props: {
		/** Allow multiple files */
		multiple: {
			type: Boolean,
			default: false
		},
		/** Maximum size in bytes per file */
		fileSizeMax: {
			type: Number,
			default: 4096 * 1024 // Default 4MB
		},
		/** The size units used in the template for i18n */
		fileSizeUnits: {
			type: Array as PropType<string[]>,
			default: () => locales.fileSizeUnits
		},
		/** The allowed file extensions */
		allowedExtensions: {
			type: Array as PropType<string[]>,
			default: () => [
				'pdf',
				'jpg',
				'jpeg',
				'png'
			]
		},
		/**
		 * The accept attribute of <input type="file">
		 * See https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
		 *
		 * This property is not required, by default it will be computed
		 * based on allowedExtensions
		 */
		accept: {
			type: String,
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class ValidatorFile extends MixinsDeclaration {
	/** The list of accepted files */
	files: File[] = [];

	/** For specific styles on hover with a file (dragover) */
	dragover = false;

	/** Used to not trigger "success" events when there is an error */
	error = false;

	/** Compute maximum size to human readable */
	get maxSizeReadable() {
		return calcHumanFileSize(this.fileSizeMax, this.fileSizeUnits);
	}

	/** Computed extensions for display */
	get extensions() {
		return this.allowedExtensions.join(', ').toUpperCase();
	}

	get computedAccept(): string {
		// Property overrides the default behavior
		if (this.accept) {
			return this.accept;
		}
		const accept: string[] = [];

		// Calc the accept="" string from the allowed extensions
		this.allowedExtensions.forEach((type: string) => {
			accept.push(`.${type}`);
		});

		// The result, eg. ".pdf,.jpeg,.jpg,.png"
		return accept.join(',');
	}

	/** Validate the file (size & extension) */
	validateFile(file: File) {
		// Maximum size
		if (file.size >= this.fileSizeMax) {
			this.error = true;

			this.$emit('error', {
				file,
				code: ErrorCodes.FILE_TOO_LARGE
			});

			return false;
		}

		const fileExt = getFileExtension(file.name);

		// Extension
		if (!this.allowedExtensions.includes(fileExt)) {
			this.error = true;

			this.$emit('error', {
				file,
				code: ErrorCodes.FILE_EXTENSION_NOT_ALLOWED
			});

			return false;
		}

		// Only add the file if valid
		this.files.push(file);

		return true;
	}

	ifTooManyFiles(files: FileList | DataTransferItemList) {
		// If not in multiple mode and more than one file,
		// return error
		if (!this.multiple && files.length > 1) {
			this.$emit('error', {
				file: files,
				code: ErrorCodes.MULTIPLE_FILES_SELECTED
			} as ErrorEvent);

			return true;
		}

		return false;
	}

	/** Reset self state to initial */
	selfReset() {
		this.dragover = false;
		this.error = false;

		// Clear previous files
		this.files = [];
	}
}
