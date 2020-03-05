<template>
	<div>
		<!-- The input file showed if there is a file to be controled-->
		<VFileInput
			v-show="showFileInput"
			ref="fileinput"
			v-bind="getMetadata"
			class="pr-4"
			outlined
			clearable
			prepend-icon=""
			:append-icon="paperclipIcon"
			@click:append="clickInputFile"
			@change="fileUplated"
		/>

		<!-- The text field to show the existing original file name -->
		<VTextField
			v-show="!showFileInput"
			:value="filename"
			v-bind="getMetadata"
			class="pr-4"
			validate-on-blur
			outlined
			readonly
			prepend-icon=""
			:append-icon="paperclipIcon"
			@click:append="clickInputFile"
			@click="clickInputFile"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiPaperclip } from '@mdi/js';

	// Utils from Vue Dot
	import { Refs } from '../../../../types';

	import { FieldComponent } from '../../mixins/fieldComponent';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Extend the VFileInput from Vuetify */
	@Component
	export default class FileUploadField extends MixinsDeclaration {

		// Refs
		$refs!: Refs<{
			fileinput: HTMLFormElement;
		}>;

		paperclipIcon = mdiPaperclip;
		showFileInput = false;
		filename: string | null = null;

		/**
		 * Force the metadata without multiple propertie
		 */
		get getMetadata() {
			let fileUploadMetadata = this.fieldMetadata;

			if (fileUploadMetadata) {
				delete fileUploadMetadata.multiple;
			}

			return fileUploadMetadata;
		}

		mounted() {
			/**
			 *  Set the original file name is defined
			 */
			if (this.field?.originalFileName) {
				this.filename = this.field.originalFileName;
			}
		}

		/**
		 * Emit the new File if valide
		 * Emit empty if old value is not
		 *
		 * @params {File} file The input file
		 */
		fileUplated(file?: File) {
			if(file) {
				this.showFileInput = true;

				if (this.$refs.fileinput.validate()) {
					this.emitChangeEvent(file);
				}
			} else {
				this.showFileInput = false;

				if (this.field.value) {
					this.emitChangeEvent(file);
				}
			}
		}

		// On textfield click event, we click on the input file
		clickInputFile() {
			const inputEl = this.$refs.fileinput.$el.querySelector('input');
			inputEl.click();
		}
	}
</script>
