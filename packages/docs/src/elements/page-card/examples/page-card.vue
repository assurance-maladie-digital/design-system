<template>
	<PageCard>
		Contenu de la page
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PageCardEx extends Vue {
		textToCopy = 'Exemple';
	}
</script>
