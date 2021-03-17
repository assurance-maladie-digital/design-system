<template>
	<div>
		<UploadWorkflow
			v-model="files"
			:vuetify-options="vuetifyOptions"
			@view-file="showFileInfo"
		/>

		<DialogBox
			v-model="dialog"
			:title="fileInfo.title"
		>
			<template #default>
				Vous avez sélectionné le fichier <b>{{ fileInfo.name }}</b>.
			</template>

			<template #actions>
				<VBtn
					color="primary"
					@click="dialog = false"
				>
					Retour
				</VBtn>
			</template>
		</DialogBox>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FileItem } from '@cnamts/vue-dot/src/patterns/UploadWorkflow/FileList/types';

	interface FileInfo {
		title: string;
		name?: string;
	}

	@Component
	export default class UploadWorkflowViewFile extends Vue {
		dialog = false;

		fileInfo = {} as FileInfo;

		files = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'idCard',
				title: 'Carte d\'identité recto / verso'
			},
			{
				id: 'passport',
				title: 'Passeport'
			}
		];

		vuetifyOptions = {
			fileList: {
				showViewBtn: true
			}
		};

		showFileInfo({ title, name }: FileItem): void {
			this.fileInfo = {
				title,
				name
			};

			this.dialog = true;
		}
	}
</script>
