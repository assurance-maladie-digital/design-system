<template>
	<div>
		<FileUpload
			v-model="file"
			v-bind="props"
			@error="showError"
			@change="valueUpdated"
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

	import { ErrorEvent, ErrorCodesType } from '@cnamts/vue-dot/src/patterns/FileUpload/types';
	import { ErrorCodes } from '@cnamts/vue-dot/src/patterns/FileUpload/errorCodes';

	@Component
	export default class FileUploadRules extends Vue {
		file: File | null = null;

		snackbar = false;
		snackbarText = '';
		snackbarColor = 'success';

		props = {
			fileSizeMax: 4096 * 1024,
			fileSizeUnits: [
				'o',
				'Ko',
				'Mo'
			],
			allowedExtensions: [
				'pdf'
			]
		};

		errorsText: ErrorCodesType = {
			MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu\'un seul fichier.',
			FILE_TOO_LARGE: 'Le fichier sélectionné est trop volumineux.',
			FILE_EXTENSION_NOT_ALLOWED: 'L\'extension du fichier sélectionné n\'est pas autorisée.'
		};

		showError(error: ErrorEvent): void {
			this.snackbarText = this.errorsText[error.code] || error.code;
			this.snackbarColor = 'error';
			this.snackbar = true;
		}

		valueUpdated(value: File): void {
			this.snackbarText = 'Le fichier a été accepté.';
			this.snackbarColor = 'success';
			this.snackbar = true;
		}
	}
</script>
