<template>
	<FileUpload v-model="file" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FileUploadEx extends Vue {
		file: File | null = null;
	}
</script>
