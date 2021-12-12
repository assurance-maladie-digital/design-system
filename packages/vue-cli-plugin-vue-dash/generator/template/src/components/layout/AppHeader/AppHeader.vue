<template>
	<HeaderBar
		<% if (i18n) { %>:service-title="$t('components.layout.appHeader.title')"<% } else { %>service-title="Projet <%= name %>"<% } %>
		:navigation-items="navigationItems"
	>
		<HeaderMenu v-if="!$maintenanceEnabled" />
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import HeaderMenu from './HeaderMenu.vue';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component({
		components: {
			HeaderMenu
		}
	})
	export default class AppHeader extends Vue {
		get navigationItems(): NavigationItem[] | undefined {
			if (this.$maintenanceEnabled) {
				return undefined;
			}

			<% if (i18n) { %>return this.$t('components.layout.appHeader.navigationItems') as unknown as NavigationItem[];<% } else { %>return [
				{
					label: 'Accueil',
					to: {
						name: 'home'
					}
				},
				{
					label: 'À propos',
					to: {
						name: 'about'
					}
				}
			];<% } %>
		}
	}
</script>
