<template>
	<div class="d-flex align-center">
		<VCard
			:id="target"
			width="100%"
			max-height="200px"
			class="overflow-y-auto"
		>
			<HeaderBar
				:navigation-items="navigationItems"
				:mobile-version="isMobileVersion"
				:show-nav-bar-menu-btn="isMobileVersion"
				:target="target"
				theme="compte-ameli"
				sticky
				class="header-bar-sticky"
			>
				<template #default>
					<VBtn
						color="primary"
						class="mr-2"
						elevation="0"
						icon
					>
						<VIcon>
							{{ hearIcon }}
						</VIcon>
					</VBtn>
					<VBtn color="primary">
						<VIcon class="mr-md-2">
							{{ deconnectIcon }}
						</VIcon>
						<span class="d-none d-md-block">Se déconnecter</span>
					</VBtn>
				</template>
			</HeaderBar>
			<VSheet
				height="600px"
				class="d-flex flex-column align-center pa-4 pa-md-14"
			>
				Content
			</VSheet>
		</VCard>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiPower } from '@mdi/js';
	import { mdiEarHearingOff } from '@mdi/js';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	const EXAMPLE_TARGET = 'header-bar-sticky';

	@Component
	export default class HeaderBarSticky extends Vue {
		target = EXAMPLE_TARGET;
		hearIcon = mdiEarHearingOff;
		deconnectIcon = mdiPower;

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

		get isMobileVersion(): boolean {
			if (this.$vuetify.breakpoint.smAndDown) {
				return true;
			}

			return false;
		}
	}
</script>

<style lang="scss">
// Display inside component
.header-bar-sticky {
	position: sticky !important;
}
</style>

