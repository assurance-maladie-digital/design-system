<template>
	<DocAlert
		type="error"
		class="mb-0"
	>
		Une erreur est survenue lors du chargement de l’exemple.
	</DocAlert>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ExampleError extends Vue {}
</script>
