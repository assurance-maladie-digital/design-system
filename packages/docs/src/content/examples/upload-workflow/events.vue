<template>
	<div>
		<UploadWorkflow
			v-model="files"
			:vuetify-options="vuetifyOptions"
			@change="valueUpdated"
			@error="showError"
		/>

		<VSnackbar
			v-model="snackbar"
			:color="snackbarColor"
		>
			{{ snackbarText }}

			<template v-slot:action="{ attrs }">
				<VBtn
					text
					v-bind="attrs"
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

		valueUpdated(fileList: FileListItem[]): void {
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
