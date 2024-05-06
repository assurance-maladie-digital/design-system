import { defineComponent } from "vue";

import FileValidation from "./fileValidation";

import type { Refs } from "@/types";
import type { HTMLInputEvent } from "../types";

export default defineComponent({
	mixins: [FileValidation],
	emits: ["update:modelValue"],
	data() {
		return {
			$refs: {} as Refs<{
				vdInputEl: HTMLInputElement;
			}>,

			dragover: false,
		};
	},
	methods: {
		inputValueChanged(event: HTMLInputEvent): void {
			if (!event.target) {
				return;
			}

			const files = event.target.files;
			this.selfReset();

			if (!files || !files.length) {
				return;
			}

			if (this.ifTooManyFiles(files)) {
				return;
			}

			for (let i = 0; i < files.length; i++) {
				this.validateFile(files[i]);
			}

			this.emitChangeEvent();
		},

		emitChangeEvent(): void {
			if (!this.error) {
				const eventValue = this.multiple ? this.files : this.files[0];

				this.$emit("update:modelValue", eventValue);
			}

			// Reset file input after everything for IE
			this.$refs.vdInputEl.value = "";
		},

		dropHandler(e: DragEvent): void {
			this.selfReset();

			const data = e.dataTransfer;

			if (!data) {
				return;
			}

			const files = data.items || data.files;

			if (this.ifTooManyFiles(files)) {
				return;
			}

			if (data.items) {
				// Use DataTransferItemList interface to access the file(s)
				for (let i = 0; i < data.items.length; i++) {
					if (data.items[i].kind === "file") {
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
		},

		selfReset(): void {
			this.dragover = false;
			this.error = false;
			this.files = [];
		},
	},
});
