<template>
	<HeaderBar>
		<VMenu
			offset-y
			z-index="4"
		>
			<template v-slot:activator="{ on, attrs }">
				<VBtn
					v-bind="attrs"
					:elevation="0"
					:icon="$vuetify.breakpoint.xsOnly"
					:height="height"
					class="pa-0 px-sm-3 py-sm-2"
					v-on="on"
				>
					<span class="d-none d-sm-inline-flex flex-column justify-start text-none font-weight-bold">
						Édith Cartier
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

			<VList>
				<VListItem
					v-for="(item, index) in items"
					:key="index"
				>
					<VListItemTitle>{{ item }}</VListItemTitle>
				</VListItem>
			</VList>
		</VMenu>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiAccountCircle } from '@mdi/js';

	@Component
	export default class HeaderBarDefaultSlot extends Vue {
		userIcon = mdiAccountCircle;

		items = [
			'Profil',
			'Paramètres',
			'Déconnexion'
		];

		get height(): string | null {
			return this.$vuetify.breakpoint.xsOnly ? null : 'auto';
		}
	}
</script>
