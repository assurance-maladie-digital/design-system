import { defineComponent } from "vue";
import type { PropType } from "vue";

import { getFileExtension } from "@/functions/getFileExtension";

import { locales } from "../locales";

import { ErrorEvent } from "../types";
import { ErrorCodes } from "../errorCodes";

export default defineComponent({
	props: {
		multiple: {
			type: Boolean,
			default: false,
		},
		fileSizeMax: {
			type: Number,
			default: 10_485_760, // 10MB
		},
		fileSizeUnits: {
			type: Array as PropType<string[]>,
			default: () => locales.fileSizeUnits,
		},
		allowedExtensions: {
			type: Array as PropType<string[]>,
			default: (): string[] => ["pdf", "jpg", "jpeg", "png"],
		},
		accept: {
			type: String,
			default: undefined,
		}
	},
	emits: ["error"],
	data() {
		return {
			files: [] as File[],
			error: false,
		};
	},
	computed: {
		computedAccept(): string {
			if (this.accept) {
				return this.accept;
			}

			const accept: string[] = [];

			this.allowedExtensions.forEach((type: string) => {
				accept.push(`.${type}`);
			});

			return accept.join(",");
		},
	},
	methods: {
		validateFile(file: File): boolean {
			if (file.size >= this.fileSizeMax) {
				this.error = true;

				this.$emit("error", {
					file,
					code: ErrorCodes.FILE_TOO_LARGE,
				});

				return false;
			}

			const fileExt = getFileExtension(file.name).toLowerCase();

			if (!this.allowedExtensions.includes(fileExt)) {
				this.error = true;

				this.$emit("error", {
					file,
					code: ErrorCodes.FILE_EXTENSION_NOT_ALLOWED,
				});

				return false;
			}

			this.files.push(file);

			return true;
		},

		ifTooManyFiles(files: FileList | DataTransferItemList): boolean {
			if (!this.multiple && files.length > 1) {
				this.$emit("error", {
					file: files,
					code: ErrorCodes.MULTIPLE_FILES_SELECTED,
				} as ErrorEvent);

				return true;
			}

			return false;
		},
	},
});
