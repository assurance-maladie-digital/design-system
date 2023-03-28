<template>
	<div class="vd-filters-side-bar">
		<VBtn
			depressed
			rounded
			color="transparent"
			@click="openCloseSidebar"
		>
			<VChip
				v-if="filtersCount"
				color="cyan-darken-40"
				text-color="white"
				small
				class="mr-2"
			>
				{{ filtersCount }}
			</VChip>

			<span class="mr-2 primary--text">
				{{ filters.length > 1 ? 'Filtres' : 'Filtre' }}
			</span>

			<VIcon color="primary">
				{{ filterIcon }}
			</VIcon>
		</VBtn>

		<VScrollXTransition>
			<VNavigationDrawer
				v-if="showSideBar"
				:elevation="6"
				permanent
				absolute
				right
				class="d-flex flex-column justify-space-between"
			>
				<VExpansionPanels
					accordion
					flat
					class="expansion-panels"
				>
					<VExpansionPanel
						v-for="(filter, index) in filters"
						:key="index"
					>
						<VExpansionPanelHeader class="d-block">
							<div
								class="header-title d-flex justify-space-between mt-4 mx-4"
								:class="{
									'mb-2': !filters[index].chips.length
								}"
							>
								<span>
									{{ filter.label }}

									<span v-if="filters[index].chips.length">
										({{ filters[index].chips.length }})
									</span>
								</span>

								<div>
									<VIcon class="header-title down-icon">
										{{ downIcon }}
									</VIcon>

									<VIcon class="header-title up-icon">
										{{ upIcon }}
									</VIcon>
								</div>
							</div>

							<ChipsList
								v-if="filters[index].chips.length"
								class="ml-4"
								:chips-limit="chipsLimit"
								:filter="filters[index]"
								@remove-chip="removeChip($event)"
								@reset-filter="resetFilter"
							/>
						</VExpansionPanelHeader>

						<VExpansionPanelContent>
							<span class="description-text-filter mb-2">
								{{ filter.description }}
							</span>

							<div class="mt-4">
								<slot
									:on="{
										change: event => onChange(event, filter),
										input: event => $set(filter, 'value', event)
									}"
									:attrs="{
										value: filter.value
									}"
									:name="`filter-${removeAccents(filter.name)}`"
								/>
							</div>
						</VExpansionPanelContent>

						<VDivider />
					</VExpansionPanel>
				</VExpansionPanels>

				<div class="px-5 mb-6 mt-10">
					<VBtn
						v-if="applyButton"
						:block="isMobile || applyButton"
						depressed
						color="primary"
						@click.stop="applyFunction"
					>
						{{ locales.apply }}
					</VBtn>

					<div
						:class="(isMobile || applyButton) ? '' : 'd-flex justify-center'"
						class="mt-3"
					>
						<VBtn
							v-if="isMobile || applyButton"
							:class="isMobile ? '' : 'mb-3 mr-4 button-complex-mode'"
							:block="isMobile || applyButton"
							outlined
							color="indigo"
							@click.stop="resetAllFilters"
						>
							{{ locales.reset }}
						</VBtn>

						<VBtn
							:class="isMobile ? 'mb-2 mt-Z' : 'button-complex-mode'"
							:outlined="isMobile"
							:text="!isMobile"
							:block="isMobile || applyButton"
							color="indigo"
							@click="closeSidebar"
						>
							{{ locales.close }}
						</VBtn>

						<VBtn
							v-if="!(isMobile || applyButton)"
							:class="isMobile ? '' : 'mb-3 ml-4 button-complex-mode'"
							:block="isMobile || applyButton"
							outlined
							color="indigo"
							@click.stop="resetAllFilters"
						>
							{{ locales.reset }}
						</VBtn>
					</div>
				</div>
			</VNavigationDrawer>
		</VScrollXTransition>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import ChipsList from '../ChipsList';

	import { FilterMixin } from '../../../mixins/filters';
	import { FilterItem } from './types';
	import { locales } from './locales';
	import { mdiChevronUp  } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<FilterItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		FilterMixin
	);

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
		upIcon = mdiChevronUp;

		showSideBar = false;

		filters: FilterItem[] = this.value;

		get filtersCount(): number {
			let count = 0;

			this.filters.forEach(filter => {
				if (filter?.chips?.length) {
					count++;
				}
			});

			return count;
		}

		openCloseSidebar(): void {
			this.showSideBar = !this.showSideBar;
		}

		closeSidebar(): void {
			this.showSideBar = false;
		}

		resetAllFilters(): void {
			for (let index = 0; index < this.filters.length; index++) {
				this.$set(this.filters[index], 'chips', []);
			}
		}
	}
</script>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

	.v-navigation-drawer {
		width: 480px !important;
	}

	.v-expansion-panel-header {
		min-height: 0 !important;
		padding: 2px;
	}

	.v-expansion-panel-header__icon {
		display: none !important;
	}

	.up-icon {
		display: none !important;
	}

	.down-icon {
		display: inline !important;
	}

	.v-expansion-panel-header--active {
		.up-icon {
			display: inline !important;
		}

		.down-icon {
			display: none !important;
		}
	}

	.header-title {
		font-weight: 500;
		font-size: 16px;
	}

	.description-text-filter {
		color: $vd-grey-lighten-20;
		font-size: 14px !important;
	}

	.expansion-panels {
		margin-left: 1px;
	}

	.button-complex-mode {
		width: 49%;
	}

	.v-navigation-drawer__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
