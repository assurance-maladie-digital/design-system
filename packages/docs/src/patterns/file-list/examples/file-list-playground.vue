<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VRow>
				<VBtn
					class="text-none"
					@click="showViewBtn = !showViewBtn"
				>
					{{ showViewBtn ? 'Masquer le bouton `view-file`' : 'Affiche le bouton `view-file`' }}
				</VBtn>
			</VRow>

			<VRow class="mt-4">
				<VBtn
					class="text-none"
					@click="hideListDivider = !hideListDivider"
				>
					{{ hideListDivider ? 'Montrer le dernier séparateur (défaut)' : 'Masquer le dernier séprateur' }}
				</VBtn>
			</VRow>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<VCard>
				<VCardText>
					<FileList
						:show-view-btn="showViewBtn"
						:hide-list-divider="hideListDivider"
						:files="files"
					/>
				</VCardText>
			</VCard>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { FileItem } from '@cnamts/vue-dot/src/patterns/FileList/types';

	@Component
	export default class FileListPlayground extends Vue {
		showViewBtn = false;

		hideListDivider = false;

		files = [
			{
				id: 0,
				title: 'RIB',
				state: 'initial'
			},
			{
				id: 1,
				title: 'Carte d\'identité recto / verso',
				state: 'error'
			},
			{
				id: 2,
				title: 'Passeport',
				state: 'initial'
			},
			{
				id: 3,
				title: 'Attestation',
				state: 'success',
				name: 'file.pdf'
			}
		];
	}
</script>
