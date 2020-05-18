<template>
	<FileList :files="files" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FileListEx extends Vue {
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
	}
</script>
