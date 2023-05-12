<template>
	<VSheet
		color="primary"
		class="pa-4 d-flex flex-wrap align-center justify-center"
	>
		<BackBtn
			dark
		/>
	</VSheet>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class BackBtnDark extends Vue {}
</script>
