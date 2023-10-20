<script lang="ts">
import type {PropType} from "vue";
import {defineComponent} from "vue";

import {config} from "./config";
import {locales} from "./locales";

import FileUploadCore from "./mixins/fileUploadCore";
import {Widthable} from "@/mixins/widthable";

import {customizable} from "@/mixins/customizable";
import {calcHumanFileSize} from "@/functions/calcHumanFileSize";

import {mdiCloudUpload} from "@mdi/js";

import type {IndexedObject} from "@/types";
import type {HTMLInputEvent} from "@/patterns/FileUpload/types";

export default defineComponent({
	mixins: [customizable(config), FileUploadCore, Widthable],
	props: {
		modelValue: {
			// File is not a valid prop type,
			// use null to allow any type & provide custom validation
			type: null as unknown as PropType<File | File[] | null>,
			default: null,
			/** @see https://github.com/vuetifyjs/vuetify/blob/9e4daa81bfe3046fcf7e4a731809c3d554b3df54/packages/vuetify/src/components/VFileInput/VFileInput.tsx#L72C13-L72C13 */
			validator(val): boolean {
				const value = Array.isArray(val) ? val : [val];
				return value.every(
					(v) => v !== null && typeof v === "object"
				);
			},
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		noRipple: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["update:modelValue"],
	data() {
		return {
			locales,
			uploadIcon: mdiCloudUpload
		};
	},
	computed: {
		colors(): IndexedObject {
			return {
				label: 'text-primary',
				multiple: 'text-black',
				info: 'text-grey'
			};
		},
		maxSizeReadable(): string {
			return calcHumanFileSize(this.fileSizeMax, this.fileSizeUnits);
		},
		extensions(): string {
			return this.allowedExtensions.join(', ').toUpperCase();
		}
	},
	methods: {
		retry(): void {
			this.$refs.vdInputEl.click();
		}
	}
});
</script>

<template>
	<label
		v-ripple="!noRipple"
		:style="widthStyles"
		:class="[
			{
				dragover: dragover,
				'dark-mode': $vuetify.theme.current.dark,
			},
			colors.label,
		]"
		class="vd-file-upload d-block pa-4"
		@dragover.prevent="dragover = true"
		@dragleave="dragover = false"
		@drop.prevent="disabled ? null : dropHandler($event)"
	>
		<input
			ref="vdInputEl"
			type="file"
			:disabled="disabled"
			:multiple="multiple"
			:accept="computedAccept"
			class="vd-file-upload-input"
			@change="e=>inputValueChanged(e as HTMLInputEvent)"
		/>

		<slot name="placeholder">
			<span class="vd-file-upload-placeholder">
				<slot name="icon">
					<VIcon v-bind="options.icon">
						{{ uploadIcon }}
					</VIcon>
				</slot>

				<span :class="colors.multiple" class="mt-1 font-weight-medium">
					<slot name="action-text" :multiple="multiple">
						{{
							multiple
								? "Placez vos fichiers ici"
								: "Placez votre fichier ici"
						}}
					</slot>
				</span>

				<span :class="colors.info" class="mb-2">
					<slot name="or">
						{{ locales.or }}
					</slot>
				</span>

				<span
					class="vd-file-upload-btn bg-primary text-white text-uppercase py-2 px-4 elevation-2"
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
						{{
							locales.infoText(
								maxSizeReadable,
								extensions,
								allowedExtensions.length
							)
						}}
					</slot>
				</span>
			</span>
		</slot>
	</label>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";
.vd-file-upload {
	cursor: pointer;
	position: relative;
	border: 1px dashed;
	transition: background 0.25s;
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
	transition: background 0.25s;
}
input[disabled] ~ .vd-file-upload-placeholder {
	opacity: 0.2;
}
</style>
