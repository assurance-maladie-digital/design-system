<template>
	<div>
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
			<input
				ref="vdInputEl"
				type="file"
				:disabled="disabled"
				:multiple="multiple"
				:accept="computedAccept"
				class="vd-file-upload-input"
				@change="inputValueChanged"
			>

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

					<span
						class="vd-file-upload-btn primary white--text text-uppercase py-2 px-4 elevation-2"
						:class="{ 'primary lighten-1': hover }"
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
							:max-size="maxSizeReadable"
							:extensions="extensions"
						>
							{{ locales.infoText(maxSizeReadable, extensions) }}
						</slot>
					</span>
				</span>
			</slot>
		</label>
	</div>
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
			value: {
				// File is not a valid prop type,
				// use null to allow any type & provide custom validation
				type: null as unknown as PropType<File | File[] | null>,
				default: null,
				/** @see https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VFileInput/VFileInput.ts#L71 */
				validator(val): boolean {
					if (val === null) {
						return true;
					}

					const value = Array.isArray(val) ? val : [val];
					const isValid = value.every((v) => v !== null && typeof v === 'object');

					return isValid;
				}
			},
			multiple: {
				type: Boolean,
				default: false
			},
			noRipple: {
				type: Boolean,
				default: false
			},
			disabled: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), FileUploadCore, Widthable);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FileUpload extends MixinsDeclaration {
		locales = locales;

		uploadIcon = mdiCloudUpload;

		hover = false;

		get colors(): IndexedObject {
			return {
				label: 'primary--text',
				multiple: 'black--text',
				info: 'grey--text'
			};
		}

		get maxSizeReadable(): string {
			return calcHumanFileSize(this.fileSizeMax, this.fileSizeUnits);
		}

		get extensions(): string {
			return this.allowedExtensions.join(', ').toUpperCase();
		}

		public retry(): void {
			this.$refs.vdInputEl.click();
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-file-upload {
		cursor: pointer;
		position: relative;
		border: 1px dashed;
		transition: background .25s;

		&:hover,
		&:focus-within,
		&.dragover {
			background: $vd-parme-lighten-90;
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
