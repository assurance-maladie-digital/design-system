<template>
	<div>
		<FileUpload
			v-model="file"
			v-bind="props"
			@error="notifError"
			@change="updatedValue"
		/>
		<VSnackbar
			v-model="snackbar"
			:color="snackbarColor"
			multi-line
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

	interface Error {
		code: string;
	}

	@Component
	export default class FileUploadRules extends Vue {
		file: File | null = null;

		snackbar = false;

		snackbarText = '';

		snackbarColor = 'success';

		props = {
			fileSizeMax: 1096 * 1024,
			fileSizeUnits: [
				'o',
				'Ko',
				'Mo'
			],
			allowedExtensions: [
				'pdf'
			],
			accept: '.pdf'
		};

		errorsText: any = {
			MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu\'un seul fichier.',
			FILE_TOO_LARGE: 'Le fichier sélectionné est trop lourd.',
			FILE_EXTENSION_NOT_ALLOWED: 'L\'extension du fichier n\'est pas autorisée.'
		};

		notifError(err: Error) {
			this.snackbarText = this.errorsText[err.code] || err.code;

			this.snackbarColor = 'error';

			this.snackbar = true;
		}

		updatedValue(value: File) {
			this.snackbarText = 'Le fichier a été accepté pour être traiter';

			this.snackbarColor = 'success';

			this.snackbar = true;
		}
	}
</script>
