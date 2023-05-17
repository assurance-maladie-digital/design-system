<template>
	<HeaderBar :navigation-items="navigationItems">
		<template #navigation-bar-secondary-content>
			<VBtn
				color="white"
				text
				class="px-1"
			>
				Besoin d’aide ?
			</VBtn>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component
	export default class HeaderBarNavigationBarSlots extends Vue {
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
