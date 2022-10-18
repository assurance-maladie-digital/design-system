<template>
	<object
		v-if="isFilePdf"
		:data="fileSrcComputed"
		v-bind="$attrs.pdf"
		type="application/pdf"
		@load="revokeFileSrc"
	>
		<p>{{ locales.previewNotAvailable }}</p>
	</object>
	<img
		v-else-if="isFileImage"
		:src="fileSrcComputed"
		v-bind="$attrs.image"
		@load="revokeFileSrc"
	>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			file: {
				type: null as unknown as PropType<File>,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FilePreview extends MixinsDeclaration {
		locales = locales;
		fileSrc = '';

		get fileSrcComputed(): string {
			if (this.file) {
				this.fileSrc = URL.createObjectURL(this.file);
			}
			return this.fileSrc;
		}

		get isFilePdf(): boolean {
			return this.file?.type === 'application/pdf';
		}

		get isFileImage(): boolean {
			return this.file ? /^image\/.*$/.test(this.file.type) : false;
		}

		revokeFileSrc(): void {
			if (this.file) {
				URL.revokeObjectURL(this.fileSrc);
			}
		}
	}
</script>
