<template>
	<div>
		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4>Slot 'placeholder'</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #placeholder>
						<div>
							<VRow>
								Glissez ou cliquez ici pour ajouter un fichier
							</VRow>
							<VRow v-if="file">
								Nom du fichier: {{ file.name }}
							</VRow>
						</div>
					</template>
				</FileUpload>
			</VCol>
		</VRow>

		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4 class="mt-4">
					Slot 'icon'
				</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #icon>
						<VIcon>
							{{ mdiDownloadCircle }}
						</VIcon>
					</template>
				</FileUpload>
			</VCol>
		</VRow>

		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4 class="mt-4">
					Slot 'action-text'
				</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #action-text>
						Glissez votre fichier ici
					</template>
				</FileUpload>
			</VCol>
		</VRow>

		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4 class="mt-4">
					Slot 'or'
				</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #or>
						Ou bien
					</template>
				</FileUpload>
			</VCol>
		</VRow>

		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4 class="mt-4">
					Slot 'or'
				</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #or>
						Ou bien
					</template>
				</FileUpload>
			</VCol>
		</VRow>

		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4 class="mt-4">
					Slot 'button-text'
				</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #button-text>
						Cliquez ici pour selectionner un fichier
					</template>
				</FileUpload>
			</VCol>
		</VRow>

		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4 class="mt-4">
					Slot 'info-text'
				</h4>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<FileUpload
					v-model="file"
				>
					<template #info-text>
						La taille du fichier ne doit pas dépasser 500To et doit être au format PDF
					</template>
				</FileUpload>
			</VCol>
		</VRow>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiDownloadCircle } from '@mdi/js';

	@Component
	export default class FileUploadSlots extends Vue {
		file: File | null = null;

		mdiDownloadCircle = mdiDownloadCircle;
	}
</script>
