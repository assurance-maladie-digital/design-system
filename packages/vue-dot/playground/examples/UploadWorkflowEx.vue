<template>
	<DocSection
		no-divider
		title="UploadWorkflow"
	>
		<UploadWorkflow v-model="files" />

		<VBtn
			class="mt-4"
			color="primary"
			@click="updateModel"
		>
			Update model
		</VBtn>

		<UploadWorkflow
			v-model="file"
			class="mt-12"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowEx extends Vue {
		files = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'cni',
				title: 'Carte d\'identité recto / verso'
			},
			{
				id: 'pass',
				title: 'Passeport'
			},
			{
				id: 'attest',
				title: 'Attestation'
			}
		];

		file = [
			{
				id: 'rib',
				title: 'RIB'
			}
		];

		updateModel() {
			this.files = [
				{
					id: 'rib',
					title: 'RIB'
				},
				{
					id: 'cni',
					title: 'Carte d\'identité recto / verso'
				},
				{
					id: 'pass',
					title: 'Passeport'
				}
			];
		}
	}
</script>
