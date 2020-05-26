<template>
	<div>
		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4>Slot général 'placeholder'</h4>
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
								Glissez ou cliquez ici pour charger un fichier
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
					Tout les autres slots
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
						fichier PDF de maximum 1Mo accepté
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
