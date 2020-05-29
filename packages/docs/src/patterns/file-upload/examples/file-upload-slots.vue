<template>
	<FileUpload v-model="file">
		<template #icon>
			<VIcon>
				{{ downloadIcon }}
			</VIcon>
		</template>

		<template #action-text>
			Glissez un fichier ici
		</template>

		<template #or>
			Ou bien
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

	import { mdiDownloadCircle } from '@mdi/js';

	@Component
	export default class FileUploadSlots extends Vue {
		file: File | null = null;

		downloadIcon = mdiDownloadCircle;
	}
</script>
