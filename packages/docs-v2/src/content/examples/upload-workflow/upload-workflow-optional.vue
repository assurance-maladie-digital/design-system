<template>
	<UploadWorkflow v-model="files" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowOptional extends Vue {
		files = [
			{
				id: 'rib',
				title: 'RIB'
			},
			{
				id: 'idCard',
				title: 'Carte d\'identité recto / verso',
				optional: true
			}
		];
	}
</script>
