<template>
	<UploadWorkflow v-model="files" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UploadWorkflowUnrestricted extends Vue {
		files: File[] = [];
	}
</script>
