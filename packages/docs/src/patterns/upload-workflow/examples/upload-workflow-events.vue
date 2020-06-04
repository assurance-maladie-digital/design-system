<template>
	<div>
		<UploadWorkflow
			v-model="files"
			@change="updatedValue($event)"
			@error="showError($event)"
		/>
		<VSnackbar
			v-model="snackbar"
			:color="snackbarColor"
		>
			{{ snackbarText }}

			<VBtn
				text
				@click="snackbar = false"
			>
				Fermer
			</VBtn>
		</VSnackbar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileListItem } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/types';
	import { ErrorEvent } from '@cnamts/vue-dot/src/patterns/FileUpload/types';
	import { ErrorCodesType } from '@cnamts/vue-dot/src/patterns/FileUpload/types';

	@Component
	export default class UploadWorkflowEvents extends Vue {
		snackbar = false;
		snackbarText = '';
		snackbarColor = 'success';

		files = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'cni',
				title: 'Carte d\'identité recto / verso'
			}
		];

		errorsText: ErrorCodesType = {
			MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu\'un seul fichier.',
			FILE_TOO_LARGE: 'Le fichier sélectionné est trop lourd.',
			FILE_EXTENSION_NOT_ALLOWED: 'L\'extension du fichier n\'est pas autorisée.'
		};

		showError(error: ErrorEvent): void {
			this.snackbarText = this.errorsText[error.code] || error.code;
			this.snackbarColor = 'error';
			this.snackbar = true;
		}

		updatedValue(fileList: FileListItem[]): void {
			const lastFileItem = fileList[fileList.length - 1];

			if(!lastFileItem?.file) return;

			this.snackbarText = `Fichier '${lastFileItem.file.name}' ajouté avec succès'`;
			this.snackbarColor = 'success';
			this.snackbar = true;
		}
	}
</script>
