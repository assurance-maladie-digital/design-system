<template>
	<div>
		<VFileInput
			v-show="showFileInput"
			ref="fileinput"
			v-bind="field.metadata"
			class="pr-4"
			persistent-hint
			outlined
			:multiple="false"
			:label="label"
			:append-icon="paperclipIcon"
			:hint="hint"
			prepend-icon=""
			@change="uploadFile"
		/>

		<VTextField
			v-show="!showFileInput"
			:value="filename"
			v-bind="field.metadata"
			class="pr-4"
			validate-on-blur
			outlined
			:hint="hint"
			persistent-hint
			readonly
			prepend-icon=""
			:append-icon="paperclipIcon"
			:label="label"
			@click="clickInputFile"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiPaperclip } from '@mdi/js';

	import { locales } from './locales';

	// Utils from Vue Dot
	import { fileMaxSize, fileMaxSizeMessage } from '../../../../rules/fileMaxSize';
	import { fileAccept, fileAcceptMessage } from '../../../../rules/fileAccept';
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

		mounted() {
			// if the filename is not defined, we show the FileInput component
			if (!this.field.originalFileName) {
				this.showFileInput = true;
			}
		}

		get rules() {
			const rules: Array = [];

			if(this.fileAccept) {
				rules.push(fileAccept(this.fileAccept));
			}

			if(this.fileMaxSize) {
				rules.push(fileMaxSize(this.fileMaxSize));
			}

			return rules;
		}

		/** Hint below the input, composed of max size & extensions */
		get hint() {
			const maxSizeMessage = fileMaxSizeMessage(this.fileMaxSize);

			const extensions = fileAcceptMessage(this.fileAccept);

			return `${maxSizeMessage}${maxSizeMessage? ', ': ''}${extensions}`;
		}

		uploadFile(value: File) {
			// TODO: upload the file and set the value with the storage ID
			const textId = 'gegzegezgk';

			this.emitChangeEvent(textId);
		}

		// On textfield click event, we click on the input file
		clickInputFile() {
			const inputEl = this.$refs.fileinput.$el.querySelector('input');
			inputEl.click();
		}
	}
</script>
