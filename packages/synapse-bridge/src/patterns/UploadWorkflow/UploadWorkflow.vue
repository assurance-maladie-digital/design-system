<script lang="ts">
import {defineComponent, VNodeNormalizedChildren} from "vue";

import { config } from './config';
import { locales } from './locales';

import { required } from '@/rules/required';

import { customizable } from '@/mixins/customizable';
import { Widthable } from '@/mixins/widthable';

import UploadWorkflowCore from './mixins/uploadWorkflowCore';
import FileList from '@/elements/FileList/FileList.vue';
import FileUpload from '@/patterns/FileUpload/FileUpload.vue';
import FilePreview from '@/elements/FilePreview/FilePreview.vue';
import DialogBox from '@/elements/DialogBox/DialogBox.vue';

export default defineComponent({
	components: {
		FileList,
		FileUpload,
		FilePreview,
		DialogBox
	},
	mixins: [customizable(config), UploadWorkflowCore, Widthable],
	props: {
		sectionTitle: {
			type: String,
			default: undefined
		},
		multiple: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			locales,
			// UploadWorkflowCore mixin
			inlineSelect: false,
			selectRules: [
				required
			]
		};
	},
	computed: {
		computedTitle(): string {
			if (this.sectionTitle) {
				return this.sectionTitle;
			}

			if (!this.internalFileListItems.length) {
				return locales.importTitle;
			}

			return locales.title(this.internalFileListItems.length > 1);
		},
		slotTitleContent(): VNodeNormalizedChildren | null {
			if (this.$slots['modal-title']) {
				const slotContent = this.$slots['modal-title']();
				return slotContent[0].children;
			}
			return null;
		},
		showFileList(): boolean {
			return this.fileList.length > 0;
		},
		displayShowViewBtn(): boolean {
			return this.showViewBtn || this.options.fileList?.showViewBtn;
		},
		showFileUpload(): boolean {
			const hasNonValidatedFiles = Boolean(this.internalFileListItems?.some((item) => item.state !== 'success'));

			return this.unrestricted || hasNonValidatedFiles;
		}
	},
	methods: {
		uploadInline(id: string): void {
			if (this.$refs.fileUpload && typeof this.$refs.fileUpload.retry === 'function') {
				this.$refs.fileUpload.retry();
				this.selectedItem = id;
				this.inlineSelect = true;
			}
		}
	}
});
</script>

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
			:hide-upload-btn="unrestricted"
			:always-show-delete-btn="unrestricted"
			:show-view-btn="displayShowViewBtn"
			@delete-file="resetFile"
			@retry="uploadInline"
			@upload="uploadInline"
			@view-file="previewFile"
		/>

		<FileUpload
			v-if="showFileUpload"
			ref="fileUpload"
			v-bind="options.fileUpload"
			v-model="uploadedFile"
			:multiple="unrestricted && multiple"
			@error="uploadError"
			@update:modelValue="fileSelected"
		/>

		<DialogBox
			v-model="dialog"
			v-bind="options.dialog"
			:title="slotTitleContent ? slotTitleContent : locales.modalTitle"
			@cancel="dialog = false"
			@confirm="dialogConfirm"
		>
			<slot name="modal-description" />

			<VForm
				v-if="showFileList"
				ref="form"
				v-bind="options.form"
				class="mb-2"
			>
				<VSelect
					v-model="selectedItem"
					v-bind="options.select"
					:items="selectItems"
					item-title="text"
					item-value="value"
					:rules="selectRules"
					color="primary"
				/>
			</VForm>

			<FilePreview
				v-if="showFilePreview"
				:options="options.filePreview"
				:file="uploadedFile"
			/>
		</DialogBox>

		<DialogBox
			v-if="showViewBtn"
			v-model="previewDialog"
			v-bind="options.previewDialog"
			@cancel="previewDialog = false"
			@confirm="previewDialog = false"
		>
			<slot name="preview-description" />

			<FilePreview
				:options="options.filePreview"
				:file="fileToPreview"
			/>
		</DialogBox>
	</div>
</template>
