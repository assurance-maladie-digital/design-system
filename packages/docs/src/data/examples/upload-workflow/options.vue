<template>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems"
		:vuetify-options="vuetifyOptions"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileListItem, SelectedFile } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/types';

	@Component
	export default class UploadWorkflowOptions extends Vue {
		selectedFiles: SelectedFile[] = [];

		fileListItems: FileListItem[] = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'idCard',
				title: 'Carte d’identité recto / verso'
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
						size: '24px'
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
