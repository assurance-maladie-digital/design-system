import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { locales } from '../locales';

import { getFileExtension } from '../../../functions/getFileExtension';

import { ErrorEvent } from '../types';
import { ErrorCodes } from '../errorCodes';

const Props = Vue.extend({
	props: {
		multiple: {
			type: Boolean,
			default: false
		},
		fileSizeMax: {
			type: Number,
			default: 10_485_760 // Default 10MB
		},
		fileSizeUnits: {
			type: Array as PropType<string[]>,
			default: () => locales.fileSizeUnits
		},
		allowedExtensions: {
			type: Array as PropType<string[]>,
			default: (): string[] => [
				'pdf',
				'jpg',
				'jpeg',
				'png'
			]
		},
		accept: {
			type: String,
			default: undefined
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component
export class FileValidation extends MixinsDeclaration {
	files: File[] = [];

	error = false;

	get computedAccept(): string {
		if (this.accept) {
			return this.accept;
		}

		const accept: string[] = [];

		this.allowedExtensions.forEach((type: string) => {
			accept.push(`.${type}`);
		});

		return accept.join(',');
	}

	validateFile(file: File): boolean {
		if (file.size >= this.fileSizeMax) {
			this.error = true;

			this.$emit('error', {
				file,
				code: ErrorCodes.FILE_TOO_LARGE
			});

			return false;
		}

		const fileExt = getFileExtension(file.name).toLowerCase();

		if (!this.allowedExtensions.includes(fileExt)) {
			this.error = true;

			this.$emit('error', {
				file,
				code: ErrorCodes.FILE_EXTENSION_NOT_ALLOWED
			});

			return false;
		}

		this.files.push(file);

		return true;
	}

	ifTooManyFiles(files: FileList | DataTransferItemList): boolean {
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
