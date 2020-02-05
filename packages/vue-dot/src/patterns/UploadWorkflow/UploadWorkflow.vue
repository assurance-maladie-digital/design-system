<template>
	<div class="vd-upload-workflow">
		<!-- The title slot can be used to change the title level -->
		<slot name="title">
			<h4 class="title mb-2">
				{{ sectionTitle }}
			</h4>
		</slot>

		<FileList
			v-bind="options.fileList"
			:files="fileList"
			@delete-file="deleteFile"
			@retry="retry"
		/>

		<FileUpload
			ref="fileUpload"
			v-model="uploadedFile"
			v-bind="options.fileUpload"
			@change="fileSelected"
			@error="uploadError"
		/>

		<VDialog
			v-model="dialog"
			v-bind="options.dialog"
		>
			<VCard v-bind="options.card">
				<VForm
					ref="form"
					v-bind="options.form"
				>
					<slot name="modal-title">
						<h4 class="mb-4">
							{{ locales.modalTitle }}
						</h4>
					</slot>

					<VSelect
						v-model="selectedItem"
						v-bind="options.select"
						:items="selectItems"
						:rules="selectRules"
						:color="$vuetify.theme.dark ? 'accent' : null"
					/>

					<VLayout v-bind="options.layout">
						<VSpacer v-bind="options.spacer" />

						<VBtn
							v-bind="options.cancelBtn"
							@click="dialog = false"
						>
							<slot name="cancel-button-text">
								{{ locales.cancelBtn }}
							</slot>
						</VBtn>

						<VBtn
							v-bind="options.confirmBtn"
							@click="dialogConfirm"
						>
							<slot name="confirm-button-text">
								{{ locales.confirmBtn }}
							</slot>
						</VBtn>
					</VLayout>
				</VForm>
			</VCard>
		</VDialog>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { FileListItem, SelectItem } from './types';

	import { Refs } from '../../types';

	import { required } from '../../rules/required';

	import { customizable } from '../../mixins/customizable';

	import FileUpload from '../FileUpload';
	import { ErrorEvent } from '../FileUpload/types';

	const Props = Vue.extend({
		props: {
			/** The v-model value (the list of files) */
			value: {
				type: Array as PropType<FileListItem[]>,
				required: true
			},
			/** The main title */
			sectionTitle: {
				type: String,
				default() {
					const plural = this.value.length > 1;

					return locales.title(plural);
				}
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * UploadWorkflow is a component that let the user select files
	 * and define a type for them in a pre-defined list
	 */
	@Component<UploadWorkflow>({
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler() {
					// Clear fileList to avoid duplicates
					this.fileList = [];

					// Build fileList from value
					this.value.forEach((propFile: FileListItem) => {
						const file = propFile;

						// If there is not state attribute
						if (!file.state) {
							// Initiate it
							file.state = 'initial';
						}

						this.fileList.push(file);
					});
				},
				immediate: true,
				deep: true
			}
		}
	})
	export default class UploadWorkflow extends MixinsDeclaration {
		// Extend $refs
		$refs!: Refs<{
			fileUpload: FileUpload;
			form: HTMLFormElement;
		}>;

		// Locales
		locales = locales;

		/** Internal value */
		fileList: FileListItem[] = [];

		/** The VDialog v-model */
		dialog = false;

		/** The FileUpload v-model */
		uploadedFile: File | null = null;

		error = false;

		/** The rules for the select in the dialog */
		selectRules = [
			required
		];

		/** The VSelect v-model */
		selectedItem = '';

		/** If there is only one file in the list, we're in single mode */
		get singleMode(): boolean {
			return this.fileList.length === 1;
		}

		/** Get the list of items for the VSelect */
		get selectItems() {
			const items: SelectItem[] = [];

			this.value.forEach((file: FileListItem) => {
				items.push({
					text: file.title,
					value: file.id
				});
			});

			return items;
		}

		/** Fired when the "confirm" button in the dialog is pressed */
		dialogConfirm() {
			// Validate the form in the dialog
			if (this.$refs.form.validate()) {
				// Close the dialog
				this.dialog = false;

				this.setFileInList();

				// Reset the form
				this.$refs.form.reset();
			}
		}

		/**
		 * Set the file and it's properties in the list
		 * (emit change event)
		 */
		setFileInList() {
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

		/** Set or delete a value in fileList */
		updateFileModel<T>(id: string, key: string, value: T) {
			// Find the index with the provided id
			const index = this.fileList.findIndex((file) => file.id === id);

			// Avoid error if index isn't find
			if (index === -1) {
				return;
			}

			// If the value is undefined
			if (value === undefined) {
				// Delete the property
				Vue.delete(this.fileList[index], key);
			} else {
				// Else, set it
				Vue.set(this.fileList[index], key, value);
			}
		}

		/** Fired when a file has been selected */
		fileSelected() {
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

		/** Fired when a "wrong" file is selected */
		uploadError(error: ErrorEvent) {
			this.error = true;
			// Reset file (if previously selected)
			this.uploadedFile = null;

			this.fileSelected();

			// Pass the default FileUpload error
			this.$emit('error', error);
		}

		/** Fired when the "delete" button is clicked in FileList */
		deleteFile(id: string) {
			// Reset the state
			this.updateFileModel(id, 'state', 'initial');
			// Clear name and file
			this.updateFileModel(id, 'name', undefined);
			this.updateFileModel(id, 'file', undefined);
		}

		/** Fired when the "retry" button is clicked in FileList */
		retry(id: string) {
			// Prefill the select
			this.selectedItem = id;
			this.$refs.fileUpload.retry();
		}
	}
</script>

<style lang="scss" scoped>
	.vd-upload-workflow {
		// Take all available space
		width: 100%;
		// But with a maximum width
		max-width: 550px;
	}
</style>
