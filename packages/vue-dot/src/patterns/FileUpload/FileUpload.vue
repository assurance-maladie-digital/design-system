<template>
	<!--
		Wrap everything in a label, so when you click it,
		it will trigger the <input>
	-->
	<label
		v-ripple="!noRipple"
		class="vd-file-upload d-block pa-4"
		:class="[
			{
				'dragover': dragover,
				'dark-mode': $vuetify.theme.dark
			},
			colors.label
		]"
		:style="widthStyles"
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
			class="vd-file-upload-input"
			@change="inputValueChanged"
		>

		<!--
			The placeholder is what will be shown as the FileUpload.
			Every part is in a slot so it can be translated by the developer
		-->
		<slot name="placeholder">
			<span class="vd-file-upload-placeholder">
				<slot name="icon">
					<VIcon v-bind="options.icon">
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
					class="vd-file-upload-btn primary white--text text-uppercase py-2 px-4 elevation-2"
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
					class="mt-4 text-body-2 font-weight-regular"
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
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { FileUploadCore } from './mixins/fileUploadCore';
	import { Widthable } from '../../mixins/widthable';

	import { customizable } from '../../mixins/customizable';

	import { calcHumanFileSize } from '../../functions/calcHumanFileSize';

	import { mdiCloudUpload } from '@mdi/js';

	import { IndexedObject } from '../../types';

	const Props = Vue.extend({
		props: {
			/** The v-model value */
			value: {
				// File is not a valid prop type, use
				// null to allow any type and
				// provide custom validation
				type: null as unknown as PropType<File | File[] | null>,
				default: null,
				/** @see https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VFileInput/VFileInput.ts#L71 */
				validator: (val): boolean => {
					if (val === null) {
						return true;
					}

					const value = Array.isArray(val) ? val : [val];
					const isValid = value.every((v) => v !== null && typeof v === 'object');

					return isValid;
				}
			},
			/** Allow multiple files */
			multiple: {
				type: Boolean,
				default: false
			},
			/** Disable v-ripple on the component */
			noRipple: {
				type: Boolean,
				default: false
			},
			/** Disable the component */
			disabled: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), FileUploadCore, Widthable);

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
	export default class FileUpload extends MixinsDeclaration {
		// Locales
		locales = locales;

		// Icons
		uploadIcon = mdiCloudUpload;

		/** For specific styles on hover */
		hover = false;

		/**
		 * Get the different colors
		 * depending on theme (light or dark)
		 */
		get colors(): IndexedObject {
			const dark = this.$vuetify.theme.dark;

			return {
				label: dark ? 'white--text' : 'primary--text',
				multiple: dark ? 'white--text' : 'black--text',
				info: 'grey--text ' + (dark ? 'text--lighten-1' : 'text--darken-1')
			};
		}

		/** Compute maximum size to human readable */
		get maxSizeReadable(): string {
			return calcHumanFileSize(this.fileSizeMax, this.fileSizeUnits);
		}

		/** Computed extensions for display */
		get extensions(): string {
			return this.allowedExtensions.join(', ').toUpperCase();
		}

		/** Expose retry function which clicks on the input */
		public retry(): void {
			this.$refs.vdInputEl.click();
		}
	}
</script>

<style lang="scss" scoped>
	.vd-file-upload {
		cursor: pointer;
		position: relative;
		border: 1px dashed;
		transition: background .25s;

		&:hover,
		&:focus-within,
		&.dragover {
			background: #f5f5f5;
		}

		&.dark-mode {
			&:hover,
			&:focus-within,
			&.dragover {
				background: #303030;
			}
		}
	}

	.vd-file-upload-placeholder {
		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.vd-file-upload-input {
		position: absolute;
		width: 1px;
		height: 1px;
		white-space: nowrap;
		overflow: hidden;
		clip: rect(1px, 1px, 1px, 1px);
	}

	.vd-file-upload-btn {
		border-radius: 4px;
		transition: background .25s;
	}
</style>
