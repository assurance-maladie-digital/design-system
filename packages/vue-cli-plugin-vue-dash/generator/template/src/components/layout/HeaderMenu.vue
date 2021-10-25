<template>
	<VMenu
		content-class="rounded"
		transition="scale-transition"
		origin="top center"
		offset-y
		left
	>
		<template #activator="{ on }">
			<VBtn
				:elevation="0"
				:icon="$vuetify.breakpoint.xsOnly"
				width="auto"
				height="auto"
				class="pa-0 px-sm-3 py-sm-2"
				v-on="on"
			>
				<span class="d-none d-sm-inline-flex flex-column justify-start text-right text-none">
					<b><% if (i18n) { %>{{ $t('components.layout.headerMenu.user') }}<% } else { %>Utilisateur<% } %></b>
					<% if (i18n) { %>{{ $t('components.layout.headerMenu.role') }}<% } else { %>Développeur<% } %>
				</span>

				<VIcon
					size="32px"
					color="grey darken-1"
					class="ml-0 ml-sm-5"
				>
					{{ userIcon }}
				</VIcon>
			</VBtn>
		</template>

		<div class="white">
			<VList>
				<VListItem
					v-for="(item, index) in links"
					:key="index"
					:disabled="item.disabled"
					:to="item.to ? item.to : null"
					exact
				>
					<VListItemTitle>{{ item.title }}</VListItemTitle>
				</VListItem>
			</VList>

			<VBtn
				block
				large
				tile
				class="primary--text"
			>
				<VIcon
					color="primary"
					class="mr-2"
				>
					{{ logoutIcon }}
				</VIcon>

				<% if (i18n) { %>{{ $t('components.layout.headerMenu.logout') }}<% } else { %>Déconnexion<% } %>
			</VBtn>
		</div>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { mdiAccountCircle, mdiLogoutVariant } from '@mdi/js';

	interface LinkItem {
		title: string;
		disabled?: boolean;
		to?: RawLocation;
	}

	/** User profile button in the HeaderBar */
	@Component
	export default class HeaderMenu extends Vue {
		// Icons
		userIcon = mdiAccountCircle;
		logoutIcon = mdiLogoutVariant;

		<% if (i18n) { %>get links(): LinkItem[] {
			return this.$t('components.layout.headerMenu.links') as unknown as LinkItem[];
		}<% } else { %>links: LinkItem[] = [
			{
				title: 'Accueil',
				to: {
					name: 'home'
				}
			}
		];<% } %>
	}
</script>
