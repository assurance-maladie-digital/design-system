<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<v-combobox
				v-model="props.fileSizeUnits"
				:items="defaultFileSizeUnits"
				label="Unités des tailles"
				multiple
				outlined
			/>

			<v-combobox
				v-model="props.allowedExtensions"
				:items="defaultAllowedExtensions"
				label="Extensions autorisés"
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
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<FileUpload
				v-model="file"
				v-bind="props"
				@error="alertError"
				@change="updatedValue"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FileUploadRules extends Vue {
		file: File | null = null;

		props = {
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

		alertError(err: any) {
			alert(`Evènement 'error' émis avec le code retour '${err.code}'`);
		}

		updatedValue(value: File) {
			alert(`Nom du fichier: ${value.name}, taille: ${value.size}`);
		}

	}
</script>
