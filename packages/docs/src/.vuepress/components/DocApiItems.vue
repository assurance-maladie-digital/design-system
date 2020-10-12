<template>
	<VCard
		class="mb-6"
		outlined
	>
		<VToolbar
			color="primary"
			height="auto"
			dark
			flat
		>
			<VContainer class="px-0">
				<VRow no-gutters>
					<VCol
						cols="12"
						md="4"
					>
						<VSelect
							v-model="current"
							:items="value"
							:menu-props="{
								offsetY: true,
								contentClass: 'primary'
							}"
							:class="$vuetify.breakpoint.mdAndUp ? '' : 'mb-6'"
							label="Composant(s) disponible(s)"
							color="white"
							hide-details
							outlined
						>
							<template #prepend-inner>
								<VIcon>
									{{ dashboardIcon }}
								</VIcon>
							</template>
						</VSelect>
					</VCol>

					<VCol
						md="4"
						cols="12"
						offset-md="4"
					>
						<VTextField
							v-model="search"
							label="Rechercher…"
							color="white"
							type="search"
							hide-details
							single-line
							clearable
							outlined
						>
							<template #append>
								<VIcon>
									{{ searchIcon }}
								</VIcon>
							</template>
						</VTextField>
					</VCol>
				</VRow>
			</VContainer>
		</VToolbar>

		<VTabs
			v-model="tab"
			:slider-color="computedTabs.length ? 'primary' : 'transparent'"
			:vertical="$vuetify.breakpoint.smAndUp"
		>
			<VTab
				v-for="(tab, index) in computedTabs"
				:key="`tab-${index}`"
				:class="{ 'justify-start': $vuetify.breakpoint.smAndUp }"
			>
				{{ tab }}
			</VTab>

			<VTabsItems
				v-model="tab"
				class="white overflow-hidden"
				touchless
			>
				<VTabItem
					v-for="(tab, index) in computedTabs"
					:key="`tab-item-${index}`"
					class="overflow-y-auto"
					style="max-height: 800px;"
					eager
				>
					<VCard
						flat
						tile
					>
						<DocParameters
							:headers="headers[tab]"
							:items="component[tab]"
							:search="search"
							:target="current"
							:type="tab"
						/>
					</VCard>
				</VTabItem>
			</VTabsItems>
		</VTabs>
	</VCard>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { ApiItems, ApiItem } from '../types';
	import { apiHeaders } from '../constants/apiHeaders';

	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	import { mdiViewDashboard, mdiMagnify } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<string[]>,
				default: () => ([])
			},
			api: {
				type: Object as PropType<ApiItems>,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocApiItems extends MixinsDeclaration {
		headers = apiHeaders;

		searchIcon = mdiMagnify;
		dashboardIcon = mdiViewDashboard;

		current = this.value.length ? this.value[0] : null;

		search = null;

		tab: string | null = null;

		tabs = [
			'api',
			'props',
			'slots',
			'params',
			'events',
			'functions',
			'functional',
			'options'
		];

		get component(): ApiItem {
			if (!this.current) {
				return {};
			}

			return this.api[this.current];
		}

		get computedTabs(): string[] {
			return this.tabs.filter(tab => (this.component[tab] || []).length > 0);
		}
	}
</script>
