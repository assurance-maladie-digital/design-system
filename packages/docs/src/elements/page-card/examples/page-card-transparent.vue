<template>
	<div class="grey lighten-3">
		<PageCard
			no-shadow
			card-class="transparent"
		>
			Contenu dans une PageCard sans couleur de fond (transparent) et sans ombre
		</PageCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class PageCardTransparent extends Vue {
		textToCopy = 'Exemple';
	}
</script>
