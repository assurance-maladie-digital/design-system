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
			:modelValue="uploadedFile"
			@error="uploadError"
			@change="fileSelected"
		/>

		<DialogBox
			:modelValue="dialog"
			v-bind="options.dialog"
			:title="locales.modalTitle"
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
					:modelValue="selectedItem"
					v-bind="options.select"
					:items="selectItems"
					:rules="selectRules"
					:color="$vuetify.theme.dark ? 'accent' : null"
				/>
			</VForm>

			<FilePreview
				v-if="showFilePreview"
				:options="options.filePreview"
				:file="uploadedFile"
			/>
		</DialogBox>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { config } from './config';
import { locales } from './locales';

import { required } from '../../rules/required';

import { customizable } from '../../mixins/customizable';
import { Widthable } from '../../mixins/widthable';

import UploadWorkflowCore from './mixins/uploadWorkflowCore';

const Props = {
	props: {
		sectionTitle: {
			type: String,
			default: undefined
		}
	}
};

export default defineComponent({
	mixins: [Props, customizable(config), UploadWorkflowCore, Widthable],
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

		showFileList(): boolean {
			return this.value.length > 0 || this.fileListItems?.length > 0;
		}
	},
	methods: {
		uploadInline(id: string): void {
			this.$refs.fileUpload.retry();
			this.selectedItem = id;
			this.inlineSelect = true;
		}
	}
});
</script>
