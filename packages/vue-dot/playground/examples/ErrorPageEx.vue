<template>
	<DocSection title="ErrorPage">
		<ErrorPage
			page-title="Page non trouvée"
			message="Il semblerait qu'il y ait eu une erreur !"
			code="404"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ErrorPageEx extends Vue {}
</script>
