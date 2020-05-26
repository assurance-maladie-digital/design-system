<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.multiple"
				label="Multiple"
			/>

			<VSwitch
				v-model="props.noRipple"
				label="Désactive l'ondulation"
			/>

			<VSwitch
				v-model="props.disabled"
				label="Désactive le composant"
			/>

			<VCombobox
				v-model="props.fileSizeUnits"
				:items="defaultFileSizeUnits"
				label="Unités des tailles"
				multiple
				outlined
			/>

			<v-combobox
				v-model="props.allowedExtensions"
				:items="defaultAllowedExtensions"
				label="Extensions autorisées"
				multiple
				outlined
			/>

			<VTextField
				v-model="props.fileSizeMax"
				label="Taille maximum"
				outlined
			/>

			<VTextField
				v-model="props.accept"
				label="Formats acceptés"
				outlined
			/>

			<VSnackbar
				v-model="snackbar"
				multi-line
			>
				{{ snackbarText }}

				<VBtn
					color="red"
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
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FileUploadPlayground extends Vue {
		file: File | null = null;

		snackbar = false;

		snackbarText = '';

		props = {
			multiple: false,
			noRipple: false,
			disabled: false,
			fileSizeMax: 4096 * 1024,
			fileSizeUnits: [
				'o',
				'Ko',
				'Mo',
				'Go',
				'To'
			],
			allowedExtensions: [
				'pdf',
				'jpg',
				'jpeg',
				'png'
			],
			accept: '.png,.jpg,.doc'
		};

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

		notifError(err: any) {
			this.snackbarText = `Evènement 'error' émis avec le code retour '${err.code}'`;

			this.snackbar = true;
		}

		updatedValue(value: File) {
			this.snackbarText = `Nom du fichier: ${value.name}, taille: ${value.size}`;

			this.snackbar = true;
		}
	}
</script>
