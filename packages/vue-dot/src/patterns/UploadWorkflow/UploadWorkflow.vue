<template>
	<div
		:style="widthStyles"
		class="vd-upload-workflow white"
	>
		<!-- The title slot can be used to change the title level -->
		<slot name="title">
			<h4 class="text-h6 mb-2">
				{{ computedTitle }}
			</h4>
		</slot>

		<FileList
			v-if="showFileList"
			v-bind="options.fileList"
			:files="fileList"
			@delete-file="resetFile"
			@retry="uploadInline"
			@upload="uploadInline"
			@view-file="emitViewFileEvent"
		/>

		<FileUpload
			ref="fileUpload"
			v-bind="options.fileUpload"
			v-model="uploadedFile"
			@error="uploadError"
			@change="fileSelected"
		/>

		<DialogBox
			v-model="dialog"
			v-bind="options.dialog"
			:title="locales.modalTitle"
			@cancel="dialog = false"
			@confirm="dialogConfirm"
		>
			<slot name="modal-description" />

			<VForm
				ref="form"
				v-bind="options.form"
			>
				<VSelect
					v-if="internalFileListItems"
					v-model="selectedItem"
					v-bind="options.select"
					:items="selectItems"
					:rules="selectRules"
					:color="$vuetify.theme.dark ? 'accent' : null"
				/>
			</VForm>

			<template
				v-if="showFilePreview"
			>
				<iframe
					v-if="isUploadedFileThisType(/^application\/pdf$/)"
					:src="uploadedFileSrc"
					type="application/pdf"
					width="100%"
					height="556"
				/>
				<img
					v-else-if="isUploadedFileThisType(/^image\/.*$/)"
					:src="uploadedFileSrc"
				>
			</template>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { required } from '../../rules/required';

	import { customizable } from '../../mixins/customizable';
	import { Widthable } from '../../mixins/widthable';

	import { UploadWorkflowCore } from './mixins/uploadWorkflowCore';

	import FileList from './FileList';

	const Props = Vue.extend({
		props: {
			sectionTitle: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), UploadWorkflowCore, Widthable);

	@Component<UploadWorkflow>({
		components: {
			FileList
		},
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class UploadWorkflow extends MixinsDeclaration {
		locales = locales;

		// UploadWorkflowCore mixin
		inlineSelect!: boolean;

		selectRules = [
			required
		];

		get computedTitle(): string {
			if (this.sectionTitle) {
				return this.sectionTitle;
			}

			if (!this.internalFileListItems.length) {
				return locales.importTitle;
			}

			return locales.title(this.internalFileListItems.length > 1);
		}

		get showFileList(): boolean {
			return this.value.length > 0 || this.fileListItems?.length > 0;
		}

		get uploadedFileSrc(): string {
			if (this.uploadedFile) {
				return URL.createObjectURL(this.uploadedFile);
			}

			return '';
		}

		uploadInline(id: string): void {
			this.$refs.fileUpload.retry();
			this.selectedItem = id;
			this.inlineSelect = true;
		}

		isUploadedFileThisType(regex: RegExp): boolean {
			if (this.uploadedFile) {
				return regex.test(this.uploadedFile.type);
			}

			return false;
		}
	}
</script>
