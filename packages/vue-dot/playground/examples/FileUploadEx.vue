<template>
	<DocSection
		no-divider
		title="FileUpload"
	>
		<h2 class="subheading mb-2 font-weight-bold">
			Default with event handlers
		</h2>

		<FileUpload
			ref="fileUpload"
			v-model="file"
			input-ref="inputEl"
			@error="error = $event"
			@change="error = null; success = true"
		/>

		<VLayout
			v-if="error"
			align-start
			column
		>
			<p class="mb-0 mt-1 error--text">
				{{ errorsText[error.code] || error }}
			</p>

			<VBtn
				class="ma-0 mt-2"
				color="primary"
				@click="retry"
			>
				Réessayer
			</VBtn>
		</VLayout>

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
	import Vue, { VueConstructor } from 'vue';
	import Component from 'vue-class-component';

	interface Refs {
		$refs: {
			fileUpload: {
				$refs: {
					inputEl: HTMLInputElement,
					vdInputEl: HTMLInputElement
				}
			}
		};
	}

	@Component
	export default class FileUploadEx extends (Vue as VueConstructor<Vue & Refs>) {
		error = null;
		success = false;

		file = null;

		errorsText = {
			MULTIPLE_FILES_SELECTED: 'Vous ne pouvez sélectionner qu\'un seul fichier.',
			FILE_TOO_LARGE: 'Le fichier sélectionné est trop lourd.',
			FILE_EXT_NOT_ALLOWED: 'L\'extension du fichier n\'est pas autorisée.'
		};

		/** Click on file input */
		retry() {
			this.$refs.fileUpload.$refs.inputEl.click();
		}
	}
</script>

<style lang="scss" scoped>
	.custom.file-upload {
		border: none;
		padding: 10px 15px !important;

		&:hover,
		&:focus {
			background: #2172c9 !important;
		}

		&.dragover {
			background: #115297 !important;
		}
	}
</style>
