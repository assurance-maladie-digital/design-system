<template>
	<HeaderBar
		<% if (i18n) { %>:service-title="$t('components.layout.appHeader.title')"<% } else { %>service-title="Projet <%= name %>"<% } %>
		:navigation-items="navigationItems"
	>
		<UserMenuBtn
			v-if="!$maintenanceEnabled"
			<% if (i18n) { %>:full-name="$t('components.layout.appHeader.user')"<% } else { %>full-name="Utilisateur"<% } %>
			<% if (i18n) { %>:additional-information="$t('components.layout.appHeader.role')"<% } else { %>additional-information="Développeur"<% } %>
		>
			<VListItem
				v-for="(item, index) in navigationItems"
				:key="index"
				:disabled="item.disabled"
				:to="item.to ? item.to : null"
				exact
			>
				<VListItemTitle>{{ item.label }}</VListItemTitle>
			</VListItem>
		</UserMenuBtn>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { NavigationItem } from '@cnamts/vue-dot/src/patterns/HeaderBar/types';

	@Component
	export default class AppHeader extends Vue {
		get navigationItems(): NavigationItem[] | null {
			if (this.$maintenanceEnabled) {
				return null;
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
