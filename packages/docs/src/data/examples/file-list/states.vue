<template>
	<FileList :files="fileList" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileItem } from '@cnamts/vue-dot/src/elements/FileList/types';

	@Component
	export default class FileListStates extends Vue {
		fileList: FileItem[] = [
			{
				title: 'RIB',
				name: 'rib.pdf',
				state: 'success'
			},
			{
				title: 'Carte d’identité recto / verso',
				name: 'carte-identite.jpg',
				state: 'success'
			},
			{
				title: 'Passport',
				name: 'passport.jpg',
				state: 'error'
			}
		];
	}
</script>
