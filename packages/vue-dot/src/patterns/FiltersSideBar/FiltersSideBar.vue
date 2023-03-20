<template>
	<div class="vd-filters-side-bar">
		<VScrollXTransition>
			<VNavigationDrawer
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
								<slot :name="`filter-${removeAccents(filter.name)}`" />
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

	import { FilterMixin } from '../../mixins/FilterMixin';
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

		filters: FilterItem[] = this.value;

		closeSidebar(): void {
			this.$emit('close-sidebar');
		}

		resetAllFilters(): void {
			for (let index = 0; index < this.filters.length; index++) {
				this.$set(this.filters[index], 'chips', []);
			}

			this.$emit('update:value', this.filters);
		}

		removeChip(event: object): void {
			this.$emit('remove-chip', event);
		}

		resetFilter(): void {
			this.$emit('reset-filter');
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
