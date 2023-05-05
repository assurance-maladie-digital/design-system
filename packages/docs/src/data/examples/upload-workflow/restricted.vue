<template>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems"
		hide-input
	/>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { FileListItem, SelectedFile } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/types';

@Component
export default class UploadWorkflowRestricted extends Vue {
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
}
</script>
