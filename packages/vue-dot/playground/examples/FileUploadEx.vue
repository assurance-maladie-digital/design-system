<template>
	<DocSection
		no-divider
		title="FileUpload"
	>
		<h2 class="subheading mb-2 font-weight-bold">
			Default with event handlers
		</h2>

		<FileUpload
			v-model="file"
			@error="error = $event"
			@change="error = null; success = true"
		/>

		<p
			v-if="error"
			class="mb-0 mt-1 error--text"
		>
			{{ errorsText[error] || error }}
		</p>

		<p
			v-else-if="success"
			class="mb-0 mt-1 success--text"
		>
			{{ file.name }}
		</p>

		<p
			v-else
			class="mb-0 mt-1 grey--text text--darken-2"
		>
			Aucun fichier sélectionné
		</p>

		<h2 class="subheading mt-3 mb-2 font-weight-bold">
			Translated
		</h2>

		<FileUpload
			:file-size-units="[
				'B',
				'kB',
				'MB',
				'GB',
				'TB'
			]"
		>
			<template #action-text="{ multiple }">
				Place your file{{ multiple ? 's' : '' }} here
			</template>

			<template #or>
				Or
			</template>

			<template #button-text>
				Choose a file
			</template>

			<template #info-text="{ maxSize, extensions }">
				(Max. size: {{ maxSize }}. Allowed formats: {{ extensions }})
			</template>
		</FileUpload>

		<h2 class="subheading mt-3 mb-2 font-weight-bold">
			Custom content & styles
		</h2>

		<FileUpload class="custom accent elevation-3">
			<template #placeholder>
				<VLayout align-center>
					<VIcon
						size="25"
						color="white"
						class="mr-2"
					>
						cloud_upload
					</VIcon>

					<span class="white--text">
						Select or drop a file
					</span>
				</VLayout>
			</template>
		</FileUpload>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FileUploadEx extends Vue {
		error = null;
		success = false;

		file = null;

		errorsText = {
			MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu\'un seul fichier.',
			FILE_TOO_LARGE: 'Le fichier sélectionné est trop lourd.',
			FILE_EXT_NOT_ALLOWED: 'L\'extension du fichier n\'est pas autorisée.'
		};
	}
</script>

<style lang="scss" scoped>
	.custom.file-upload {
		border: none;
		padding: 10px 15px !important;

		&.dragover {
			background: #115297 !important;
		}
	}
</style>
