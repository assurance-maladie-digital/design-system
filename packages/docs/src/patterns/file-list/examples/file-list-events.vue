<template>
	<FileList
		show-view-btn
		:files="files"
		@view-file="viewFile"
		@delete-file="deleteFile"
		@retry="retryFile"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { FileItem } from '@cnamts/vue-dot/src/patterns/FileList/types';

	@Component
	export default class FileListEvents extends Vue {
		files = [
			{
				id: 0,
				title: 'RIB',
				state: 'initial'
			},
			{
				id: 1,
				title: 'Carte d\'identité recto / verso',
				state: 'error'
			},
			{
				id: 2,
				title: 'Passeport',
				state: 'initial'
			},
			{
				id: 3,
				title: 'Attestation',
				state: 'success',
				name: 'file.pdf'
			}
		];

	  	deleteFile(fileId: number) {
			alert(`Evènement 'delete-file' du fichier ${fileId} appeler`);
		}

	  	retryFile(fileId: number) {
			alert(`Evènement 'retry' du fichier ${fileId} appeler`);
		}

	  	viewFile(file: FileItem) {
			alert(`Evènement 'retry' du fichier ${JSON.stringify(file)} appeler`);
		}

	}
</script>
