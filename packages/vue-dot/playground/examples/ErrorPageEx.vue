<template>
	<DocSection title="ErrorPage">
		<ErrorPage
			title="Page non trouvé"
			message="Il semblerait qu'il y ait eu une erreur !"
			code="404"
			cta="Rtour à l'acceuil"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ErrorPageEx extends Vue {}
</script>
