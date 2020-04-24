<template>
	<VCard
		class="mb-6"
		outlined
	>
		<VToolbar
			color="primary"
			dark
			flat
			height="auto"
		>
			<VContainer class="px-0">
				<VRow no-gutters>
					<VCol
						cols="12"
						md="4"
					>
						<VSelect
							v-model="current"
							:class="$vuetify.breakpoint.mdAndUp ? '' : 'mb-6'"
							:items="value"
							:menu-props="{ offsetY: true, contentClass: 'primary' }"
							color="white"
							hide-details
							label="Composant(s) disponible(s)"
							outlined
							prepend-inner-icon="mdi-view-dashboard"
						>
							<template #prepend-inner>
								<VIcon>
									{{ dashboardIcon }}
								</VIcon>
							</template>
						</VSelect>
					</VCol>

					<VCol
						cols="12"
						md="4"
						offset-md="4"
					>
						<VTextField
							v-model="search"
							clearable
							color="white"
							hide-details
							label="Rechercher…"
							outlined
							single-line
							type="search"
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
				v-for="(tab, i) in computedTabs"
				:key="`tab-${i}`"
				:class="[$vuetify.breakpoint.smAndUp && 'justify-start']"
			>
				{{ tab.replace(/([A-Z])/g, ' $1') }}
			</VTab>

			<VTabsItems
				v-model="tab"
				class="white overflow-hidden"
				touchless
			>
				<VTabItem
					v-for="(tab, i) in computedTabs"
					:key="`tab-item-${i}`"
					class="overflow-y-auto"
					eager
					style="max-height: 800px;"
				>
					<VCard
						flat
						tile
					>
						<DocParameters
							:headers="headers[tab]"
							:items="component[tab]"
							:lang="lang"
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
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiViewDashboard, mdiMagnify } from '@mdi/js';

	const propProps = [
		{
			text:'Nom',
			value: 'name',
			class: 'xs6 md3'
		},
		{
			text: 'Type',
			value: 'type',
			class: 'xs6 md2 text-xs-right'
		},
		{
			text: 'Valeur',
			value: 'defaultValue',
			class: 'xs12 md7 text-md-right'
		},
		{
			text: 'Description',
			value: 'description',
			class: 'xs12 mt-2'
		},
		{
			text: 'Exemple',
			value: 'example',
			class: 'xs12 mt-2'
		}
	];

	const Props = Vue.extend({
		props: {
			lang: {
				type: String,
				default: ''
			},
			value: {
				type: Array,
				default: () => ([])
			},
			api: {
				type: Object,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<DocApiItems>({
		watch: {
			component() {
				const api = this.component[this.tab || ''];

				if (api && api.length) {
					return;
				}

				for (const tab of ['props', 'slots', 'options']) {
					if (this.component[tab] && this.component[tab].length > 0) {
						this.tab = tab;
						return;
					}
				}

				this.tab = '';
			}
		}
	})
	export default class DocApiItems extends MixinsDeclaration {
		searchIcon = mdiMagnify;
		dashboardIcon = mdiViewDashboard;

		current = this.value && this.value.length ? this.value[0] : null;

		headers = {
			api: [...propProps],
			props: [...propProps],
			slots: [
				{
					text: 'Nom',
					value: 'name',
					class: 'xs12'
				},
				{
					value: 'description',
					type: 'markdown',
					class: 'xs12 mt-2'
				},
				{
					value: 'props',
					class: 'xs12 mt-2'
				}
			],
			events: [
				{
					value: 'name',
					class: 'xs12'
				},
				{
					value: 'description',
					class: 'xs12 mt-2'
				},
				{
					value: 'value',
					class: 'xs12 mt-2'
				}
			],
			functions: [
				{
					value: 'name',
					class: 'xs12'
				},
				{
					value: 'description',
					type: 'markdown',
					class: 'xs12 mt-2'
				},
				{
					value: 'signature',
					class: 'xs12 mt-2'
				}
			],
			functional: [
				{
					value: 'name',
					class: 'xs12'
				},
				{
					value: 'description',
					class: 'xs12 mt-2'
				}
			],
			options: [...propProps],
			sass: [
				{
					value: 'name',
					class: 'xs12'
				},
				{
					value: 'defaultValue',
					type: 'sass',
					class: 'xs12 mt-2'
				}
			]
		};

		search = null;
		tab: string | null = null;

		tabs = ['api', 'props', 'slots', 'params', 'events', 'functions', 'functional', 'options', 'sass'];

		get component(): any {
			const component: any = {};

			for (const tab of this.tabs) {
				component[tab] = [];
			}

			return {
				...component,
				...this.api[this.current as any]
				// ...(api[this.current] || {}),
				// sass: variableApi[this.current] || []
			};
		}

		get computedTabs() {
			return this.tabs.filter(tab => (this.component[tab] || []).length > 0);
		}
	}
</script>
