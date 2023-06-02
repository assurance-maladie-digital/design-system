<template>
	<HeaderBar
		:navigation-items="navigationItems"
		mobile-version
	>
		<template #navigation-drawer-prepend>
			<BackBtn
				dark
				class="mb-6"
			/>
		</template>

		<template #navigation-drawer-append>
			<VBtn
				color="white"
				outlined
				class="w-100"
			>
				Connexion
			</VBtn>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component
	export default class HeaderBarDrawerSlots extends Vue {
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
