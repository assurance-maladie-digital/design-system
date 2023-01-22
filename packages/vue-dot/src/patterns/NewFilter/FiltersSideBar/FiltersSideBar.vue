<template>
	<div class="vd-filters-side-bar">
		<VScrollXTransition>
			<VNavigationDrawer
				:elevation="6"
				permanent
				absolute
				right
				class="pt-2 d-flex flex-column justify-space-between"
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
								class="header-title d-flex justify-space-between mt-3 mx-4"
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
									<VIcon
										class="header-title down-icon"
									>
										{{ downIcon }}
									</VIcon>

									<VIcon
										class="header-title up-icon"
									>
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

				<div
					class="px-5 mb-6 mt-10"
				>
					<div
						class="mt-3"
						:class="(isMobile || applyButton) ? '' : 'd-flex justify-space-between'"
					>
						<VBtn
							:class="isMobile ? 'mb-4 mt-4 text-capitalize' : 'mb-4 button-complex-mode text-capitalize'"
							:outlined="isMobile || applyButton"
							:text="!isMobile && !applyButton"
							large
							:block="isMobile || applyButton"
							color="primary"
							@click="closeSidebar"
						>
							{{ locales.close }}
						</VBtn>
						<VBtn
							:class="isMobile ? 'mb-4 text-capitalize' : 'mb-4 button-complex-mode text-capitalize'"
							:block="isMobile || applyButton"
							outlined
							large
							color="primary"
							@click.stop="resetAllFilters"
						>
							{{ locales.reset }}
						</VBtn>
					</div>
					<VBtn
						v-if="applyButton"
						:block="isMobile || applyButton"
						depressed
						large
						color="primary text-capitalize"
						@click.stop="applyFunction"
					>
						{{ locales.apply }}
					</VBtn>
				</div>
			</VNavigationDrawer>
		</VScrollXTransition>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import ChipsList from '../ChipsList';

	import { locales } from '../locales';

	import { FilterItem } from '../types';

	import { mdiChevronUp, mdiChevronDown, mdiWindowClose } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array as PropType<FilterItem[]>,
				required: true
			},
			chipsLimit: {
				type: Number,
				required: true
			},
			applyButton: {
				type: Boolean,
				required: true
			},
			applyFunction: {
				type: Function,
				required: true
			}
		}
	});

	@Component<FiltersSideBar>({
		components: {
			ChipsList,
			FiltersSideBar
		}
	})
	export default class FiltersSideBar extends Props {
		locales = locales;
		deleteIcon = mdiWindowClose;
		upIcon = mdiChevronUp;
		downIcon = mdiChevronDown;

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		removeAccents(str: string): string | undefined {
			return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		}

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
		width: 48%;
	}

	.v-navigation-drawer__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
</style>
