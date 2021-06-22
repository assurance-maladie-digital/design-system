<template>
	<FileUpload v-model="file">
		<template #icon>
			<VIcon
				large
				color="primary"
			>
				{{ downloadIcon }}
			</VIcon>
		</template>

		<template #action-text>
			Glissez un fichier ici
		</template>

		<template #or>
			Sinon
		</template>

		<template #button-text>
			Sélectionnez un fichier
		</template>

		<template #info-text>
			Fichier PDF de 1 Mo maximum accepté
		</template>
	</FileUpload>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiFileUpload } from '@mdi/js';

	@Component
	export default class FileUploadSlots extends Vue {
		file: File | null = null;

		downloadIcon = mdiFileUpload;
	}
</script>
