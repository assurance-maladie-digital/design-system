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
				id: 'idCard',
				title: 'Carte d\'identité recto / verso'
			},
			{
				id: 'passport',
				title: 'Passeport'
			}
		];

		vuetifyOptions = {
			fileList: {
				hideLastDivider: true,
				showViewBtn: true,
				vuetifyOptions: {
					actionIcon: {
						size: '24'
					}
				}
			},
			fileUpload: {
				noRipple: true,
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