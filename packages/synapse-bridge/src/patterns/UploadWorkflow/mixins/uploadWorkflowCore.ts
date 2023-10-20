import type {PropType} from "vue";
import {defineComponent} from "vue";

import consola from 'consola';

import UpdateFileModel from "./updateFileModel";

import {Refs} from "../../../types";
import {FileListItem, SelectedFile, SelectItem} from "../types";

import FileUpload from "../../FileUpload";
import {ErrorEvent} from "../../FileUpload/types";

export default defineComponent({
	mixins: [UpdateFileModel],
	emits: ["change", "view-file", "error"],
	props: {
		value: {
			type: Array as PropType<File[] | SelectedFile[]>,
			default: () => ([])
		},
		fileListItems: {
			type: Array as PropType<FileListItem[]>,
			default: () => ([])
		},
		showFilePreview: {
			type: Boolean,
			default: false,
		},
		showViewBtn: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			$refs: {} as Refs<{
				fileUpload: typeof FileUpload;
				form: HTMLFormElement;
			}>,
			dialog: false,
			previewDialog: false,
			error: false,
			inlineSelect: false,
			unrestricted: false,
			uploadedFile: null as File | null,
			fileToPreview: null as File | null,
			selectedItem: null as string | number | null,
			internalFileListItems: [] as FileListItem[],
		};
	},
	watch: {
		value: {
			handler(): void {
				this.setInternalModel();
			},
			immediate: true,
			deep: true,
		},
		fileListItems: {
			handler(): void {
				this.setInternalModel();
			},
		},
	},
	computed: {
		uploadedFiles(): File[] {
			if (!this.uploadedFile) {
				return [];
			}

			if (Array.isArray(this.uploadedFile)) {
				return this.uploadedFile;
			}

			return [this.uploadedFile];
		},

		singleMode(): boolean {
			return this.internalFileListItems.length === 1;
		},

		selectItems(): SelectItem[] {
			if (this.unrestricted) {
				return [];
			}

			return this.internalFileListItems.map((file) => {
				return {
					text: file.title,
					value: file.id
				};
			});
		},
	},
	methods: {
		setInternalModel(): void {
			this.internalFileListItems = this.fileListItems ?? this.value;

			if (this.fileListItems === null && !this.value) {
				this.resetInternalModel();
			}

			if (this.internalFileListItems.length) {
				this.initFileList(this.internalFileListItems);
			} else {
				this.unrestricted = true;
			}
		},

		setFileInList(): void {
			if (this.unrestricted) {
				return;
			}

			const index = this.internalFileListItems.findIndex((file) => file.id === this.selectedItem);

			if (index === -1) {
				return;
			}

			this.updateFileModel(index, 'state', this.error ? 'error' : 'success');

			if (this.uploadedFiles.length) {
				this.uploadedFiles.forEach((file) => {
					this.updateFileModel(index, 'name', file.name);
					this.updateFileModel(index, 'file', file);
				});
			}

			this.error = false;

			this.emitChangeEvent();
		},

		resetFile(index: number): void {
			if (!this.internalFileListItems.length) {
				this.fileList.splice(index, 1);
			} else {
				this.updateFileModel(index, "state", "initial");
				this.updateFileModel(index, "name", undefined);
				this.updateFileModel(index, "file", undefined);
			}

			this.emitChangeEvent();
		},

		resetInternalModel(): void {
			this.fileList = [];
			this.internalFileListItems = [];
		},

		emitChangeEvent(): void {
			this.$nextTick(() => {
				this.$emit("change", this.fileList);
			}).then(r => r);
		},

		async previewFile(file: FileListItem | File): Promise<void> {
			if (!this.showViewBtn) {
				consola.warn('Using `vuetify-options` for this functionality is deprecated since v2.16.0, use the `show-view-btn` prop instead.');

				await this.$nextTick();
				this.$emit('view-file', file);
			}

			let fileToPreview: File | null = null;

			if ('file' in file && file.file) {
				// if file is of type FileListItem
				fileToPreview = file.file;
			} else if (file instanceof File) {
				// if file is of type File (free mode)
				fileToPreview = file;
			} else {
				return;
			}

			this.fileToPreview = fileToPreview;
			this.previewDialog = true;
		},

		async dialogConfirm(): Promise<void> {
			await this.$nextTick();

			if (
				this.showFilePreview &&
				!this.internalFileListItems.length &&
				this.uploadedFile
			) {
				this.fileList.push(this.uploadedFile);
				this.emitChangeEvent();
				this.dialog = false;

				return;
			}

			if (this.$refs.form.validate()) {
				this.dialog = false;
				this.setFileInList();
				this.$refs.form.reset();
			}
		},

		fileSelected(): void {
			this.error = false;

			if (this.showFilePreview) {
				if (this.singleMode || this.selectedItem === null && this.selectItems.length) {
					this.selectedItem = this.selectItems[0].value;
				}

				this.dialog = true;

				return;
			}

			if (this.unrestricted && this.uploadedFiles.length) {
				this.fileList.push(...this.uploadedFiles);
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
				this.selectedItem = "";

				return;
			}

			this.selectedItem = this.selectItems[0].value;
			this.dialog = true;
		},

		async uploadError(error: ErrorEvent): Promise<void> {
			this.error = true;
			this.uploadedFile = null;

			this.setFileInList();

			await this.$nextTick();
			this.$emit("error", error);
		},
	},
});
