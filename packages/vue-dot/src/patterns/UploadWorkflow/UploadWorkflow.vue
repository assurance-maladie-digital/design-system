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

		<DialogBox
			v-model="dialog"
			v-bind="options.dialog"
			@cancel="dialog = false"
			@confirm="dialogConfirm"
		>
			<template #title>
				<slot name="modal-title">
					<h4 class="mb-4">
						{{ locales.modalTitle }}
					</h4>
				</slot>
			</template>

			<VForm
				ref="form"
				v-bind="options.form"
			>
				<VSelect
					v-model="selectedItem"
					v-bind="options.select"
					:items="selectItems"
					:rules="selectRules"
					:color="$vuetify.theme.dark ? 'accent' : null"
				/>
			</VForm>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';
	import { FileListItem, SelectItem } from './types';

	import { required } from '../../rules/required';

	import { customizable } from '../../mixins/customizable';

	import { EventsFileFired } from './mixins/eventsFileFired';

	import FileList from './FileList';
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

	const MixinsDeclaration = mixins(Props, customizable(config), EventsFileFired);

	/**
	 * UploadWorkflow is a component that let the user select files
	 * and define a type for them in a pre-defined list
	 */
	@Component<UploadWorkflow>({
		components: {
			FileList
		},
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(): void {
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
		// Locales
		locales = locales;

		/** The rules for the select in the dialog */
		selectRules = [
			required
		];

		/** If there is only one file in the list, we're in single mode */
		get singleMode(): boolean {
			return this.fileList.length === 1;
		}

		/** Get the list of items for the VSelect */
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

		/** Fired when a file has been selected */
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

		/** Fired when a "wrong" file is selected */
		uploadError(error: ErrorEvent): void {
			this.error = true;
			// Reset file (if previously selected)
			this.uploadedFile = null;

			this.fileSelected();

			// Pass the default FileUpload error
			this.$emit('error', error);
		}

		/** Fired when the "retry" button is clicked in FileList */
		retry(id: string): void {
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
