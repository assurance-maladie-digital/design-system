<template>
	<ErrorPage
		code="404"
		title="Page non trouvée"
		message="Il semblerait qu'il y ait eu une erreur !"
		cta="Retour à la page d'accueil"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	/** 404 page */
	@Component
	export default class NotFound extends Vue {}
</script>
