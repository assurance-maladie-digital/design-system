<template>
	<div class="vd-upload-workflow">
		<!-- The title slot can be used to change the title level -->
		<slot name="title">
			<h4 class="title mb-2">
				{{ sectionTitle }}
			</h4>
		</slot>

		<FileList
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
			persistent
			width="550"
		>
			<VCard class="pa-4">
				<VForm ref="form">
					<h4 class="mb-4">
						Fichier transmis
					</h4>

					<VSelect
						v-model="selectedItem"
						:items="selectItems"
						:rules="selectRules"
						:color="$vuetify.theme.dark ? 'accent' : null"
						filled
						validate-on-blur
						item-text="title"
						item-value="value"
						label="Nature du fichier"
					/>

					<VLayout
						wrap
						class="mt-2"
					>
						<VSpacer />

						<VBtn
							text
							class="mr-4"
							color="accent"
							@click="dialog = false"
						>
							Retour
						</VBtn>

						<VBtn
							color="accent"
							@click="confirmAction"
						>
							Confirmer
						</VBtn>
					</VLayout>
				</VForm>
			</VCard>
		</VDialog>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Refs } from '../../types';

	import required from '../rules/required';

	import customizable, { Options } from '../mixins/customizable';

	interface FileListEl {
		id: string;
		title: string;
		state: string;
		name?: string;
	}

	interface PropFile {
		id: string;
		title: string;
	}

	interface SelectedItems {
		title: string;
		value: string;
	}

	const Props = Vue.extend({
		props: {
			files: {
				type: [Array, Object],
				default: () => []
			},
			sectionTitle: {
				type: String,
				default() {
					const plural = this.files.length > 1;

					return `Document${plural ? 's' : ''} à nous transmettre`;
				}
			}
		}
	});

	/**
	 * UploadWorkflow is a component that does things
	 */
	@Component({
		mixins: [
			// Default configuration
			customizable({
				fileUpload: {
					class: 'mt-6'
				}
			})
		]
	})
	export default class UploadWorkflow extends Props {
		// Mixin computed data
		options!: Options;

		// Extend $refs
		$refs!: Refs<{
			fileUpload: {
				// retry: () => void;
			},
			form: HTMLFormElement;
		}>;

		dialog = false;

		selectedItem = '';

		uploadedFile: File | null = null;

		fileList: FileListEl[] = [];

		error = false;

		selectRules = [
			required
		];

		fileSelected() {
			if (this.files.length > 1) {
				this.dialog = true;
			} else {
				this.selectedItem = this.selectItems[0].value;
				this.setFileInList();
			}
		}

		get selectItems() {
			const items: SelectedItems[] = [];

			this.files.forEach((file: PropFile) => {
				items.push({
					title: file.title,
					value: file.id
				});
			});

			return items;
		}

		confirmAction() {
			if (this.$refs.form.validate()) {
				this.dialog = false;

				this.setFileInList();

				this.$refs.form.reset();
			}
		}

		setFileInList() {
			this.updateFileState();

			const fileName = this.uploadedFile ? this.uploadedFile.name : null;

			this.updateFileModel(this.selectedItem, 'name', fileName);
			this.updateFileModel(this.selectedItem, 'file', this.uploadedFile);
		}

		updateFileState() {
			this.updateFileModel(this.selectedItem, 'state', this.error ? 'error' : 'success');

			this.error = false;
		}

		getFileIndex(id: string) {
			const index = this.fileList.findIndex((file) => {
				return file.id === id;
			});

			return index;
		}

		updateFileModel<T>(id: string, key: string, value: T) {
			const index = this.getFileIndex(id);

			// Avoid error if no index
			if (index === -1) {
				return;
			}

			Vue.set(this.fileList[index], key, value);
		}

		deleteFile(id: string) {
			this.updateFileModel(id, 'state', 'initial');
			this.updateFileModel(id, 'name', undefined);
		}

		uploadError() {
			this.error = true;
			this.uploadedFile = null;

			if (this.files.length > 1) {
				this.dialog = true;
			} else {
				this.selectedItem = this.selectItems[0].value;
				this.setFileInList();
			}
		}

		retry(id: string) {
			this.selectedItem = id;
			this.$refs.fileUpload.retry();
		}

		mounted() {
			this.files.forEach((file: PropFile) => {
				this.fileList.push({
					...file,
					state: 'initial'
				});
			});
		}
	}
</script>

<style lang="scss" scoped>
	.vd-upload-workflow {
		width: 100%;
		max-width: 550px;
	}
</style>
