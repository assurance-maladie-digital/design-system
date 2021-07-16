<template>
	<FileUpload class="accent elevation-3 px-4 py-3">
		<template #placeholder>
			<span class="d-flex align-center white--text">
				<VIcon
					size="25"
					color="white"
					class="mr-4"
				>
					{{ uploadIcon }}
				</VIcon>

				Sélectionner un fichier
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
		uploadIcon = mdiCloudUpload;

		file: File | null = null;
	}
</script>

<style lang="scss" scoped>
	.v-icon {
		flex: none;
	}
</style>
