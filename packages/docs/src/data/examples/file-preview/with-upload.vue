<template>
	<div>
		<FileUpload
		v-if="!file"
			v-model="file"
		/>

		<FilePreview
		v-if="file"
			:file="file"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilePreviewWithUpload extends Vue {
		file: File | null = null;
	}
</script>
