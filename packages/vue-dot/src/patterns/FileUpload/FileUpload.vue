<template>
	<!--
		Wrap everything in a label, so when you click it,
		it will trigger the <input>
	-->
	<label
		v-ripple="ripple"
		class="file-upload d-block pa-4"
		:class="[
			{
				'dragover': dragover,
				'dark-mode': $vuetify.theme.dark
			},
			colors.label
		]"
		@dragover.prevent="dragover = true"
		@dragleave="dragover = false"
		@drop.prevent="dropHandler"
	>
		<!-- The actual <input>, masked with CSS -->
		<input
			ref="vdInputEl"
			type="file"
			:disabled="disabled"
			:multiple="multiple"
			:accept="computedAccept"
			class="file-upload-input"
			@change="inputValueChanged"
		>

		<!--
			The placeholder is what will be shown as the FileUpload.
			Every part is in a slot so it can be translated by the developer
		-->
		<slot name="placeholder">
			<span class="file-upload-placeholder">
				<slot name="icon">
					<VIcon
						size="40"
						color="primary"
					>
						{{ uploadIcon }}
					</VIcon>
				</slot>

				<span
					class="mt-1 font-weight-medium"
					:class="colors.multiple"
				>
					<slot
						name="action-text"
						:multiple="multiple"
					>
						{{ multiple ? 'Placez vos fichiers ici' : 'Placez votre fichier ici' }}
					</slot>
				</span>

				<span
					class="mb-2"
					:class="colors.info"
				>
					<slot name="or">
						{{ locales.or }}
					</slot>
				</span>

				<!--
					mouseover & mouseleave are used to apply
					a specific Vuetify class in hover state
				-->
				<span
					class="file-upload-btn primary white--text text-uppercase py-2 px-4 elevation-2"
					:class="{ 'primary lighten-1': hover }"
					@mouseover="hover = true"
					@mouseleave="hover = false"
				>
					<slot name="button-text">
						{{ locales.chooseFile }}
					</slot>
				</span>

				<span
					:class="colors.info"
					class="mt-4 body-2 font-weight-regular"
				>
					<slot
						name="info-text"
						:maxSize="maxSizeReadable"
						:extensions="extensions"
					>
						{{ locales.infoText(maxSizeReadable, extensions) }}
					</slot>
				</span>
			</span>
		</slot>
	</label>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import locales from './locales';

	import getFileExtension from '../../functions/getFileExtension';
	import calcHumanFileSize from '../../functions/calcHumanFileSize';

	import { mdiCloudUpload } from '@mdi/js';

	import { Refs } from '../../types';
	import { ErrorEvent } from './types';
	import { ErrorCodes } from './errorCodes';

	interface HTMLInputEvent extends Event {
		target: HTMLInputElement & EventTarget;
	}

	const Props = Vue.extend({
		props: {
			/** Allow multiple files */
			multiple: {
				type: Boolean,
				default: false
			},
			/**
			 * The v-model value,
			 * allow File as type because on single mode,
			 * the v-model isn't an array
			 */
			value: {
				type: [Array, Object, File],
				default: () => []
			},
			/** Apply v-ripple on the component */
			ripple: {
				type: Boolean,
				default: true
			},
			/** Disable the component */
			disabled: {
				type: Boolean,
				default: false
			},
			/** Maximum size in bytes per file */
			fileSizeMax: {
				type: Number,
				default: 4096 * 1024 // Default 4MB
			},
			/** The size units used in the template for i18n */
			fileSizeUnits: {
				type: [Array, Object],
				default: () => [
					'o',
					'Ko',
					'Mo',
					'Go',
					'To'
				]
			},
			/** The allowed file extensions */
			allowedExtensions: {
				type: [Array, Object],
				default: () => [
					'pdf',
					'jpg',
					'jpeg',
					'png'
				]
			},
			/**
			 * The accept attribute of <input type="file">
			 * See https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
			 *
			 * This property is not required, by default it will be computed
			 * based on allowedExtensions
			 */
			accept: {
				type: String,
				default: undefined
			}
		}
	});

	/**
	 * FileUpload is a component that enhance the default HTML
	 * file input element
	 */
	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FileUpload extends Props {
		$refs!: Refs<{
			vdInputEl: HTMLInputElement;
		}>;

		// Icons
		uploadIcon = mdiCloudUpload;

		// Locales
		locales = locales;

		/** The list of accepted files */
		files: File[] = [];
		/** For specific styles on hover */
		hover = false;
		/** For specific styles on hover with a file (dragover) */
		dragover = false;
		/** Used to not trigger "success" events when there is an error */
		error = false;

		/**
		 * Get the differents colors
		 * depending on theme (light or dark)
		 */
		get colors() {
			const dark = this.$vuetify.theme.dark;

			return {
				label: dark ? 'white--text' : 'primary--text',
				multiple: dark ? 'white--text' : 'black--text',
				info: 'grey--text ' + (dark ? 'text--lighten-1' : 'text--darken-1')
			};
		}

		/** Reset self state to initial */
		selfReset() {
			this.dragover = false;
			this.error = false;

			// Clear previous files
			this.files = [];
		}

		/** Validate the file (size & extension) */
		validateFile(file: File) {
			// Maximum size
			if (file.size >= this.fileSizeMax) {
				this.error = true;

				this.$emit('error', {
					file,
					code: ErrorCodes.FILE_TOO_LARGE
				});

				return false;
			}

			const fileExt = getFileExtension(file.name);

			// Extension
			if (!this.allowedExtensions.includes(fileExt)) {
				this.error = true;

				this.$emit('error', {
					file,
					code: ErrorCodes.FILE_EXTENSION_NOT_ALLOWED
				});

				return false;
			}

			// Only add the file if valid
			this.files.push(file);

			return true;
		}

		/** Computed extensions for display */
		get extensions() {
			return this.allowedExtensions.join(', ').toUpperCase();
		}

		emitChangeEvent() {
			if (!this.error) {
				// Take the first file in single mode
				const eventValue = this.multiple ? this.files : this.files[0];

				this.$emit('change', eventValue);
			}

			// Reset file input
			// Do after everything for IE
			this.$refs.vdInputEl.value = '';
		}

		/** This function is executed when content is dropped on the component */
		dropHandler(e: DragEvent) {
			this.selfReset();

			const data = e.dataTransfer;

			if (!data) {
				return;
			}

			const files = data.items || data.files;

			// Stop if multiple files selected in single mode
			if (this.ifTooMuchfiles(files)) {
				return;
			}

			if (data.items) {
				// Use DataTransferItemList interface to access the file(s)
				for (let i = 0; i < data.items.length; i++) {
					// If dropped items aren't files, reject them
					if (data.items[i].kind === 'file') {
						const file = data.items[i].getAsFile();

						if (!file) {
							return;
						}

						this.validateFile(file);
					}
				}
			} else {
				// Use DataTransfer interface to access the file(s)
				for (let i = 0; i < data.files.length; i++) {
					this.validateFile(data.files[i]);
				}
			}

			this.emitChangeEvent();
		}

		/** This function is executed when after a manual file selection */
		inputValueChanged(event: HTMLInputEvent) {
			if (!event.target) {
				return;
			}

			const files = event.target.files;
			this.selfReset();

			// Don't do anything if no file selected
			if (!files || !files.length) {
				return;
			}

			// Stop if multiple files selected in single mode
			if (this.ifTooMuchfiles(files)) {
				return;
			}

			for (let i = 0; i < files.length; i++) {
				this.validateFile(files[i]);
			}

			this.emitChangeEvent();
		}

		ifTooMuchfiles(files: FileList | DataTransferItemList) {
			// If not in multiple mode and more than one file,
			// return error
			if (!this.multiple && files.length > 1) {
				this.$emit('error', {
					file: files,
					code: ErrorCodes.MULTIPLE_FILES_SELECTED
				} as ErrorEvent);

				return true;
			}

			return false;
		}

		/** Compute maximum size to human readable */
		get maxSizeReadable() {
			return calcHumanFileSize(this.fileSizeMax, this.fileSizeUnits);
		}

		get computedAccept(): string {
			// Property overrides the default behavior
			if (this.accept) {
				return this.accept;
			}

			const accept: string[] = [];

			// Calc the accept="" string from the allowed extensions
			this.allowedExtensions.forEach((type: string) => {
				accept.push(`.${type},`);
			});

			// The result, eg. ".pdf,.jpeg,.jpg,.png"
			return accept.join();
		}

		/** Expose retry function which clicks on the input */
		public retry() {
			this.$refs.vdInputEl.click();
		}
	}
</script>

<style lang="scss" scoped>
	.file-upload {
		width: 100%;
		max-width: 550px;
		cursor: pointer;
		position: relative;
		border: 1px dashed;
		transition: background .25s;

		&:hover,
		a:focus,
		&.dragover {
			background: #f5f5f5;
		}

		&.dark-mode {
			&:hover,
			a:focus,
			&.dragover {
				background: #303030;
			}
		}
	}

	.file-upload-placeholder {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.file-upload-input {
		position: absolute;
		width: 1px;
		height: 1px;
		white-space: nowrap;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
	}

	.file-upload-btn {
		border-radius: 4px;
		transition: background .25s;
	}
</style>
