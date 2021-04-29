<template>
	<div
		:style="widthStyles"
		class="vd-upload-workflow"
	>
		<!-- The title slot can be used to change the title level -->
		<slot name="title">
			<h4 class="text-h6 mb-2">
				{{ computedTitle }}
			</h4>
		</slot>

		<FileList
			v-bind="options.fileList"
			:files="fileList"
			@delete-file="resetFile"
			@retry="showFileUpload"
			@upload="showFileUpload"
			@view-file="emitViewFileEvent"
		/>

		<FileUpload
			ref="fileUpload"
			v-bind="options.fileUpload"
			v-model="uploadedFile"
			@change="fileSelected"
			@error="uploadError"
		/>

		<DialogBox
			v-model="dialog"
			v-bind="options.dialog"
			:title="locales.modalTitle"
			@cancel="dialog = false"
			@confirm="dialogConfirm"
		>
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
			/** The main title */
			sectionTitle: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), UploadWorkflowCore, Widthable);

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
		}
	})
	export default class UploadWorkflow extends MixinsDeclaration {
		// Locales
		locales = locales;

		/** The rules for the select in the dialog */
		selectRules = [
			required
		];

		get computedTitle(): string {
			if (this.sectionTitle) {
				return this.sectionTitle;
			} else {
				const plural = this.value.length > 1;

				return locales.title(plural);
			}
		}

		/** Prefill the select and click on FileUpload */
		showFileUpload(id: string): void {
			// Prefill the select
			this.selectedItem = id;
			this.$refs.fileUpload.retry();
		}
	}
</script>
