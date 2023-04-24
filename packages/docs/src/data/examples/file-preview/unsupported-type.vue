<template>
	<FilePreview :file="file" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilePreviewUsage extends Vue {
		file = new File(['exemple'], 'example.txt');
	}
</script>
