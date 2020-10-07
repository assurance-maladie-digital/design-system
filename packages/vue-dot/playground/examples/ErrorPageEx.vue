<template>
	<DocSection
		no-divider
		title="ErrorPage"
	>
		<p>Page d'erreur</p>

		<ErrorPage
			title="Page non trouvé"
			message="Désolé, cette page n'existe pas ou plus"
			code="404"
			cta="acceuil"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ErrorPageEx extends Vue {}
</script>
