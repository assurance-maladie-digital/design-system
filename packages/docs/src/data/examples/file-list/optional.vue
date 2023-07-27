<template>
	<FileList :files="fileList" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileItem } from '@cnamts/vue-dot/src/elements/FileList/types';

	@Component
	export default class FileListOptional extends Vue {
		fileList: FileItem[] = [
			{
				title: 'RIB',
				state: 'initial'
			},
			{
				title: 'Carte d’identité recto / verso',
				state: 'initial'
			},
			{
				title: 'Passport',
				state: 'initial',
				optional: true
			}
		];
	}
</script>
