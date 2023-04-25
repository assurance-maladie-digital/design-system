<template>
	<div>
		<FileUpload
			v-model="file"
			:class="{ 'mb-8': file !== null }"
		/>

		<FilePreview :file="file" />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilePreviewUsage extends Vue {
		file: File | null = null;
	}
</script>
