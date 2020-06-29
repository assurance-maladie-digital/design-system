import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { locales } from '../locales';

import { getFileExtension } from '../../../functions/getFileExtension';

import { ErrorEvent } from '../types';
import { ErrorCodes } from '../errorCodes';

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
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class FileValidator extends MixinsDeclaration {
	/** The list of accepted files */
	files: File[] = [];

	/** Used to not trigger "success" events when there is an error */
	error = false;

	/** Validate the file (size & extension) */
	validateFile(file: File): boolean {
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

	ifTooManyFiles(files: FileList | DataTransferItemList): boolean {
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
}
