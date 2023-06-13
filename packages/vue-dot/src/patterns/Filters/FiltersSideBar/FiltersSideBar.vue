<template>
	<div class="vd-filters-side-bar">
		<VBtn
			:class="{ 'v-btn--active': drawer }"
			color="primary"
			text
			rounded
			class="px-2"
			@click="toggleDrawer"
		>
			<!-- <VBadge
				v-if="filtersCount"
				:content="filtersCount"
				color="secondary"
				inline
				class="ml-n2 mr-2"
			/> -->

			{{ locales.filterBtnLabel }}

			<VIcon
				class="ml-2"
				small
			>
				{{ filterIcon }}
			</VIcon>
		</VBtn>

		<VNavigationDrawer
			v-model="drawer"
			fixed
			right
			temporary
			hide-overlay
			width="395px"
			class="elevation-6"
		>
			<VExpansionPanels
				accordion
				flat
			>
				<VExpansionPanel
					v-for="(filter, index) in filters"
					:key="index"
				>
					<VExpansionPanelHeader class="text-subtitle-2">
						{{ filter.title }}

						<!--
							<span v-if="filters[index].chips.length">
								({{ filters[index].chips.length }})
							</span>
						</div> -->
					</VExpansionPanelHeader>

					<VExpansionPanelContent>
						<ChipsList
							:chips="getChips(filter.value)"
							:filter="filters[index]"
							class="mb-6"
						/>

						<slot
							:on="{
								change: event => onChange(event, filter),
								input: event => $set(filter, 'value', event)
							}"
							:attrs="{
								value: filter.value
							}"
							:name="`${removeAccents(filter.name)}`"
						/>
					</VExpansionPanelContent>
				</VExpansionPanel>
			</VExpansionPanels>

			<VSpacer />

			<div class="px-4 pb-4 pt-10">
				<VBtn
					color="primary"
					block
					large
					outlined
					class="mb-4"
					@click="drawer = false"
				>
					{{ locales.close }}
				</VBtn>

				<VBtn
					color="primary"
					block
					large
					outlined
					class="mb-4"
					@click.stop="resetAllFilters"
				>
					{{ locales.reset }}
				</VBtn>

				<VBtn
					block
					large
					color="primary"
					@click.stop="applyFunction"
				>
					{{ locales.apply }}
				</VBtn>
			</div>
		</VNavigationDrawer>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import ChipsList from '../ChipsList';

	import { FilterMixin } from '../../../mixins/filters';

	import { FilterItem } from './types';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<FilterItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props, FilterMixin);

	@Component<FiltersSideBar>({
		model: {
			prop: 'value',
			event: 'update:value'
		},
		watch: {
			value(newValue: FilterItem[]) {
				this.filters = newValue;
			}
		},
		components: {
			ChipsList
		}
	})
	export default class FiltersSideBar extends MixinsDeclaration {
		locales = locales;

		drawer = false;

		filters = this.value;

		flattenSelectValue(value: any[]): string[] {
			return value.flatMap(item => {
				if (typeof item !== 'object') {
					return item.toString();
				}

				return item.text || item.value.toString();
			});
		}

		getChips(value: any): string[] { // TODO: generate chips from values
			console.log(value);
			if (!value) {
				return [];
			}

			if (typeof value === 'string' || typeof value === 'number') {
				return [value.toString()];
			}

			if (Array.isArray(value)) {
				return this.flattenSelectValue(value);
			}

			return value;
			// return filterItem.chips.slice(0, this.overflowLimit);
		}

		toggleDrawer(): void {
			this.drawer = !this.drawer;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-filters-side-bar :deep() {
		.v-navigation-drawer {
			&__content {
				display: flex;
				flex-direction: column;
			}

			&__border {
				display: none;
			}
		}

		.v-expansion-panel {
			border-bottom: 1px solid rgba(0, 0, 0, 0.12);
		}
	}
</style>
