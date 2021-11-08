<template>
	<HeaderBar
		:navigation-items="navigationItems"
		theme="ameli-pro"
		inner-width="600px"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component
	export default class HeaderBarInnerWidth extends Vue {
		navigationItems: NavigationItem[] = [
			{
				label: 'Accueil'
			},
			{
				label: 'Mes projets'
			},
			{
				label: 'Mes outils'
			}
		];
	}
</script>
