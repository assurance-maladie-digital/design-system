<template>
	<UploadWorkflow
		v-model="files"
		:vuetify-options="vuetifyOptions"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowEx extends Vue {
		files = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'cni',
				title: 'Carte d\'identité recto / verso'
			},
			{
				id: 'pass',
				title: 'Passeport'
			},
			{
				id: 'attest',
				title: 'Attestation'
			}
		];

		vuetifyOptions = {
			fileList: {
				hideListDivider: true,
				showViewBtn: true,
				vuetifyOptions: {
					viewFileBtn: {
						color: 'primary',
						icon: false
					},
					deleteFileBtn: {
						icon: false
					},
					actionIcon: {
						size: '24'
					}
				}
			},
			fileUpload: {
				noRipple: true,
				fileSizeMax: 1024 * 1024,
				allowedExtensions: [
				'pdf'
			]
			},
			select: {
				outlined: false
			},
			dialog: {
				width: '400px'
			}
		};
	}
</script>
