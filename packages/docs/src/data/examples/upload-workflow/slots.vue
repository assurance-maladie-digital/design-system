<template>
	<UploadWorkflow
		v-model="selectedFiles"
		:file-list-items="fileListItems"
		show-file-preview
	>
		<template #title>
			<h4 class="title font-weight-bold">
				Documents à sélectionner
			</h4>
		</template>

		<template #modal-title>
			<h4 class="title font-weight-bold">
				Sélectionnez le type du fichier
			</h4>
		</template>

		<template #modal-description>
			<p>
				Veuillez vérifier que le document correspond bien à l'assuré concerné
			</p>
		</template>
	</UploadWorkflow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileListItem, SelectedFile } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/types';

	@Component
	export default class UploadWorkflowSlots extends Vue {
		selectedFiles: SelectedFile[] = [];

		fileListItems: FileListItem[] = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'cni',
				title: 'Carte d’identité recto / verso'
			}
		];
	}
</script>
