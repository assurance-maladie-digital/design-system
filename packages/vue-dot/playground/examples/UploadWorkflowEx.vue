<template>
	<DocSection
		no-divider
		title="UploadWorkflow"
	>
		<UploadWorkflow :files="files" />

		<UploadWorkflow
			class="mt-12"
			:files="[
				{
					id: 'rib',
					title: 'RIB'
				}
			]"
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
	}
</script>
