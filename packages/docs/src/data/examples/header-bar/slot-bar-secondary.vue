<template>
	<HeaderBar :navigation-items="navigationItems">
		<template #navigation-bar-prepend>
			<div class="d-flex align-center justify-center">
				<VBtn color="primary">
					Prepend
				</VBtn>
			</div>
		</template>
		<template #navigation-bar-secondary-content>
			<div class="d-flex align-center justify-center">
				<VBtn color="primary">
					Secondary
				</VBtn>
			</div>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

@Component
export default class HeaderBarNavigationBarSecondaryContent extends Vue {
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
