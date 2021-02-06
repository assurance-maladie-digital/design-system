<template>
	<DocSection title="UploadWorkflow">
		<UploadWorkflow
			v-model="files"
			width="512"
		/>

		<VBtn
			class="mt-4"
			color="accent"
			@click="updateModel"
		>
			Update model
		</VBtn>

		<UploadWorkflow
			v-model="file"
			width="512"
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
				title: 'RIB',
				optional: true
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

		updateModel(): void {
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
