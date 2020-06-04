<template>
	<UploadWorkflow v-model="files">
		<template #title>
			<h4>Titre</h4>
		</template>

		<template #modal-title>
			<h4>Fichier prêt, sélectionné la nature du fichier</h4>
		</template>
	</UploadWorkflow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowSlots extends Vue {
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
