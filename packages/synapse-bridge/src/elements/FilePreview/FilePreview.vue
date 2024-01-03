<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { Options } from "@/mixins/customizable";

import deepMerge from "deepmerge";

export default defineComponent({
	props: {
		file: {
			// File is not a valid prop type,
			// use null to allow any type & provide custom validation
			type: null as unknown as PropType<File | Blob | null>,
			default: null,
			/** @see https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VFileInput/VFileInput.ts#L71 */
			validator(value): boolean {
				return typeof value === "object";
			},
		},
		options: {
			type: Object as PropType<Options>,
			default: () => ({}),
		},
	},
	data() {
		return {
			locales,
			fileURL: "",
		};
	},
	watch: {
		file: {
			handler(): void {
				this.getFileURL();
			},
			immediate: true,
		},
	},
	computed: {
		filePreviewOptions(): Options {
			return deepMerge<Options>(config, this.options);
		},
		isPdf(): boolean {
			return this.file?.type === "application/pdf";
		},
		isImage(): boolean {
			return this.file ? /^image\/.*$/.test(this.file.type) : false;
		},
	},
	methods: {
		getFileURL(): void {
			if (!this.file) {
				return;
			}
			this.fileURL = window.URL.createObjectURL(this.file);
		},
		revokeFileURL(): void {
			URL.revokeObjectURL(this.fileURL);
		},
	},
});
</script>

<template>
	<div v-if="file" class="vd-file-preview">
		<object
			v-if="isPdf"
			:data="fileURL"
			v-bind="filePreviewOptions.pdf"
			type="application/pdf"
			@load="revokeFileURL"
		>
			<p class="mb-0">
				{{ locales.previewNotAvailable }}
			</p>
		</object>

		<img
			v-else-if="isImage"
			:src="fileURL"
			:alt="filePreviewOptions.image.alt || ''"
			v-bind="filePreviewOptions.image"
			@load="revokeFileURL"
		/>

		<slot v-else>
			<p class="mb-0">
				{{ locales.previewTypeNotAvailable }}
			</p>
		</slot>
	</div>
</template>
