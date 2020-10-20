<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.multiple"
				label="Multiple"
				hide-details
				class="mt-0"
			/>

			<VSwitch
				v-model="props.noRipple"
				label="Désactiver l'ondulation"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.disabled"
				label="Désactiver le composant"
				hide-details
				class="mt-4"
			/>

			<VCombobox
				v-model="props.fileSizeUnits"
				:items="defaultFileSizeUnits"
				label="Unités des tailles"
				hide-details
				multiple
				outlined
				class="mt-8"
			/>

			<VCombobox
				v-model="props.allowedExtensions"
				:items="defaultAllowedExtensions"
				label="Extensions autorisées"
				hide-details
				multiple
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model.number="props.fileSizeMax"
				label="Taille maximum (octets)"
				hide-details
				outlined
				class="mt-8"
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
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<FileUpload
				v-model="file"
				v-bind="props"
				@error="showError"
				@change="valueUpdated"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ErrorEvent, ErrorCodesType } from '@cnamts/vue-dot/src/patterns/FileUpload/types';

	@Component
	export default class FileUploadPlayground extends Vue {
		file: File | File[] | null = null;

		snackbar = false;
		snackbarText = '';
		snackbarColor = 'success';

		defaultFileSizeUnits = [
			'o',
			'Ko',
			'Mo',
			'Go',
			'To'
		];

		defaultAllowedExtensions = [
			'pdf',
			'jpg',
			'jpeg',
			'png'
		];

		props = {
			multiple: false,
			noRipple: false,
			disabled: false,
			fileSizeMax: 4096 * 1024,
			fileSizeUnits: this.defaultFileSizeUnits,
			allowedExtensions: this.defaultAllowedExtensions
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

		valueUpdated(file: File): void {
			this.snackbarText = `Le fichier "${file.name}" a été accepté.`;
			this.snackbarColor = 'success';
			this.snackbar = true;
		}
	}
</script>
