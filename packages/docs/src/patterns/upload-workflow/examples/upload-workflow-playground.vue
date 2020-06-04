<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VTextField
				v-model="sectionTitle"
				label="Titre"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<UploadWorkflow
				v-model="files"
				:section-title="sectionTitle"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowPlayground extends Vue {
		sectionTitle = null;

		files = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'cni',
				title: 'Carte d\'identité recto / verso'
			}
		];
	}
</script>
