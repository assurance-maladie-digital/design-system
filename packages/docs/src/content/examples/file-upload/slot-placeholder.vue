<template>
	<FileUpload class="custom accent elevation-3 px-4 py-3">
		<template #placeholder>
			<span class="d-flex align-center">
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
			</span>
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

<style lang="scss" scoped>
	.v-icon {
		flex: none;
	}
</style>
