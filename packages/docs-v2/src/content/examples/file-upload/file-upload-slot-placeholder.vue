<template>
	<FileUpload class="custom accent elevation-3 px-4 py-3">
		<template #placeholder>
			<VLayout
				tag="span"
				align-center
			>
				<VIcon
					size="25"
					color="white"
					class="mr-4"
				>
					{{ uploadIcon }}
				</VIcon>

				<span class="white--text">
					Déposez un fichier ici ou cliquer pour sélectionner
				</span>
			</VLayout>
		</template>
	</FileUpload>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCloudUpload } from '@mdi/js';

	@Component
	export default class FileUploadSlotPlaceholder extends Vue {
		file: File | null = null;

		uploadIcon = mdiCloudUpload;
	}
</script>