<template>
	<div>
		<UploadWorkflow
			v-model="selectedFiles"
			:file-list-items="fileListItems"
			:vuetify-options="vuetifyOptions"
			@view-file="showFileInfo"
		/>

		<DialogBox
			v-if="displayedFile"
			v-model="dialog"
			:title="displayedFile.title"
		>
			<template #default>
				Vous avez sélectionné le fichier <b>{{ displayedFile.name }}</b>.
			</template>

			<template #actions>
				<VBtn
					color="primary"
					@click="dialog = false"
				>
					Retour
				</VBtn>
			</template>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileListItem, SelectedFile } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/types';

	@Component
	export default class UploadWorkflowViewFile extends Vue {
		selectedFiles: SelectedFile[] = [];

		dialog = false;
		displayedFile: SelectedFile | null = null;

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
				showViewBtn: true
			}
		};

		showFileInfo(file: SelectedFile): void {
			this.displayedFile = file;
			this.dialog = true;
		}
	}
</script>
