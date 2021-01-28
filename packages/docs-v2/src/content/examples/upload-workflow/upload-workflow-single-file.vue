<template>
	<UploadWorkflow v-model="files" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowSingleFile extends Vue {
		files = [
			{
				id: 'rib',
				title: 'RIB'
			}
		];
	}
</script>