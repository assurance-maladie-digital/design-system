<template>
	<div>
		<UploadWorkflow
			v-model="selectedFiles"
			:file-list-items="fileListItems"
			:vuetify-options="vuetifyOptions"
			@change="valueUpdated"
			@error="showError"
		/>

		<VSnackbar
			v-model="snackbar"
			:color="snackbarColor"
		>
			{{ snackbarText }}

			<template #action="{ attrs }">
				<VBtn
					v-bind="attrs"
					text
					@click="snackbar = false"
				>
					Fermer
				</VBtn>
			</template>
		</VSnackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileListItem, SelectedFile } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/types';
	import { ErrorEvent, ErrorCodesType } from '@cnamts/vue-dot/src/patterns/FileUpload/types';

	@Component
	export default class UploadWorkflowEvents extends Vue {
		snackbar = false;
		snackbarText: string | null = null;
		snackbarColor = 'success';

		selectedFiles: SelectedFile[] = [];

		fileListItems: FileListItem[] = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'idCard',
				title: 'Carte d’identité recto / verso'
			}
		];

		vuetifyOptions = {
			fileUpload: {
				allowedExtensions: [
					'png',
					'jpg',
					'jpeg'
				]
			}
		};

		errorsText: ErrorCodesType = {
			MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu’un seul fichier.',
			FILE_TOO_LARGE: 'Le fichier sélectionné est trop lourd.',
			FILE_EXTENSION_NOT_ALLOWED: 'L’extension du fichier n’est pas autorisée.'
		};

		showError(error: ErrorEvent): void {
			this.snackbarText = this.errorsText[error.code];
			this.snackbarColor = 'error';
			this.snackbar = true;
		}

		valueUpdated(fileList: SelectedFile[]): void {
			const { file } = fileList[fileList.length - 1];

			if (!file) {
				return;
			}

			this.snackbarText = `Le fichier "${file.name}" a été ajouté avec succès.'`;
			this.snackbarColor = 'success';
			this.snackbar = true;
		}
	}
</script>
