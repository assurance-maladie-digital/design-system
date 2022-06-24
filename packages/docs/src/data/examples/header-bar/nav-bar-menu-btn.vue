<template>
	<HeaderBar
		:navigation-items="navigationItems"
		theme="ameli-pro"
		mobile-version
		show-nav-bar-menu-btn
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component
	export default class HeaderBarNavBarMenuBtn extends Vue {
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
