<template>
	<div class="new-filter">
		<!-- simple mode -->
		<div>
			<div
				v-if="simpleMode"
			>
				<VMenu
					v-for="(filter, index) in filters"
					:key="index"
					min-width="300px"
					max-width="400px"
					offset-y
					:close-on-content-click="false"
					nudge-bottom="10px"
				>
					<template #activator="{ on }">
						<VBtn
							class="simple-mode-filters mr-4"
							color="secondary"
							depressed
							:outlined="!filterSelection[index]?.selection.length"
							v-on="on"
						>
							<VChip
								v-if="filterSelection[index]?.selection.length"
								class="ml-n2 mr-2"
								color="white"
								small
							>
								{{ filterSelection[index]?.selection.length }}
							</VChip>
							<span>{{ filter.label }}</span>
							<VIcon>
								{{ downIcon }}
							</VIcon>
						</VBtn>
					</template>
					<div
						class="mt-2 px-4"
					>
						<span class="description-text-filter mb-2">{{ filter.description }}</span>
						<v-chip-group
							v-if="filterSelection[index]"
							class="mb-4"
							column
						>
							<v-chip
								v-for="(chip, chipIndex) in limitChips(filterSelection[index])"
								:key="chipIndex"
								small
								close
								class="mt-2"
								:close-icon="deleteIcon"
								color="cyan-darken-40"
								text-color="white"
								@click:close="removeChip(index, chipIndex)"
							>
								{{ chip }}
							</v-chip>
							<v-chip
								v-if="showExpandChip(index)"
								small
								outlined
								color="cyan-lighten-60"
								text-color="cyan-darken-40"
								class="mt-2 bg-cyan"
								@click.stop="displayHiddenChips(index)"
							>
								{{ `+${filterSelection[index].selection.length - chipsLimit}` }}
							</v-chip>
							<v-chip
								v-if="filterSelection[index].showAll"
								small
								outlined
								color="cyan-lighten-60"
								text-color="cyan-darken-40"
								class="mt-2 bg-cyan"
								@click.stop="filterSelection[index].showAll = false"
							>
								<VIcon>
									{{ upIcon }}
								</VIcon>
							</v-chip>
							<v-btn
								v-if="filterSelection[index].selection.length"
								class="text-none align-self-center mt-2"
								x-small
								text
								color="primary"
								@click.stop="resetFilter(index)"
							>
								Réinitialiser
							</v-btn>
						</v-chip-group>
						<slot
							:on="{
								change: (event) => addChips(event, removeAccents(filter.name))
							}"
							:name="`filter-${removeAccents(filter.name)}`"
						/>
					</div>
				</VMenu>
			</div>

			<!-- mode with sidebar -->
			<VBtn
				v-if="!simpleMode"
				depressed
				rounded
				color="transparent"
				@click="showSideBar = !showSideBar"
			>
				<v-chip
					v-if="filtersCount"
					class="mr-2"
					color="cyan-darken-40"
					text-color="white"
					small
				>
					{{ filtersCount }}
				</v-chip>
				<span
					class="mr-2 primary--text"
				>
					{{ filters.length > 1 ? 'Filtres' : 'Filtre' }}
				</span>
				<VIcon
					color="primary"
				>
					{{ filterIcon }}
				</VIcon>
			</VBtn>

			<!-- sidebar v-click-outside="closeSidebar" -->
			<v-scroll-x-transition>
				<VNavigationDrawer
					v-if="showSideBar && !simpleMode"
					permanent
					absolute
					right
					:elevation="6"
					class="pt-2 d-flex flex-column justify-space-between"
				>
					<v-expansion-panels
						accordion
						flat
						class="expansion-panels"
					>
						<v-expansion-panel
							v-for="(filter, index) in filters"
							:key="index"
						>
							<v-expansion-panel-header
								class="d-block"
							>
								<div
									class="header-title d-flex justify-space-between mt-3 mx-4"
								>
									<span>
										{{ filter.label }}
										<span v-if="filterSelection[index].selection.length">
											({{ filterSelection[index].selection.length }})
										</span>
									</span>
									<div>
										<VIcon
											id="up-icon"
											class="header-title"
										>
											{{ upIcon }}
										</VIcon>
										<VIcon
											id="down-icon"
											class="header-title"
										>
											{{ downIcon }}
										</VIcon>
									</div>
								</div>
								<v-chip-group
									v-if="filterSelection[index]"
									class="mx-3"
									column
								>
									<v-chip
										v-for="(chip, chipIndex) in limitChips(filterSelection[index])"
										:key="chipIndex"
										small
										close
										class="mt-2"
										:close-icon="deleteIcon"
										color="cyan-darken-40"
										text-color="white"
										@click:close="removeChip(index, chipIndex)"
									>
										{{ parseChips(chip) }}
									</v-chip>
									<v-chip
										v-if="showExpandChip(index)"
										small
										outlined
										color="cyan-lighten-60"
										text-color="cyan-darken-40"
										class="mt-2 bg-cyan"
										@click.stop="displayHiddenChips(index)"
									>
										{{ `+${filterSelection[index].selection.length - chipsLimit}` }}
									</v-chip>
									<v-chip
										v-if="showExpandChip(index) && filterSelection[index].showAll"
										small
										outlined
										color="cyan-lighten-60"
										text-color="cyan-darken-40"
										class="mt-2 bg-cyan"
										@click.stop="filterSelection[index].showAll = false"
									>
										<VIcon>
											{{ upIcon }}
										</VIcon>
									</v-chip>
									<v-btn
										v-if="filterSelection[index].selection.length"
										class="text-none align-self-center mt-2"
										x-small
										text
										cla
										color="primary"
										@click.stop="resetFilter(index)"
									>
										Réinitialiser
									</v-btn>
								</v-chip-group>
							</v-expansion-panel-header>
							<v-expansion-panel-content>
								<span class="description-text-filter mb-2">{{ filter.description }}</span>
								<div class="mt-4">
									<slot
										:on="{
											change: (event) => addChips(event, removeAccents(filter.name))
										}"
										:name="`filter-${removeAccents(filter.name)}`"
									/>
								</div>
							</v-expansion-panel-content>
							<VDivider />
						</v-expansion-panel>
					</v-expansion-panels>

					<!-- buttons -->
					<div
						class="px-5 mb-6 mt-10"
						:class="isMobile ? '' : 'd-flex justify-center'"
					>
						<v-btn
							:class="isMobile ? '' : 'mb-2 mr-4'"
							:outlined="isMobile"
							:text="!isMobile"
							:block="isMobile"
							small
							color="indigo"
							@click="closeSidebar"
						>
							Fermer
						</v-btn>
						<v-btn
							:class="isMobile ? 'mb-2 mt-2' : ''"
							:block="isMobile"
							outlined
							small
							color="indigo"
							@click.stop="resetAllFilters"
						>
							Réinitialiser
						</v-btn>
					</div>
				</VNavigationDrawer>
			</v-scroll-x-transition>
		</div>
	</div>
</template>

<script lang="ts">
	//	eslint-disable max-lines
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import dayjs from 'dayjs';
	import { FilterItem } from './types';

	import { locales } from './locales';

	import { mdiChevronUp, mdiChevronDown, mdiWindowClose, mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array as PropType<FilterItem[]>,
				required: true
			},
			simpleMode: {
				type: Boolean,
				default: false
			},
			chipsLimit: {
				type: Number,
				default: 4
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({})
	export default class NewFilter extends MixinsDeclaration {
		locales = locales;
		deleteIcon = mdiWindowClose;
		filterIcon = mdiFilterVariant;
		upIcon = mdiChevronUp;
		downIcon = mdiChevronDown;

		showSideBar = false;
		filterSelection: FilterItem[] = [];

		get filtersCount(): number {
			let count = 0;

			this.filterSelection.forEach(filter => {
				if (filter?.selection?.length) {
					count = count + filter.selection.length;
				}
			});
			return count;
		}

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		removeAccents(str: string): string | undefined {
			const newString = str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
			return newString;
		}

		addChips(event: unknown, value: unknown): void {
			for (let i = 0; i < this.filters.length; i++) {
				if (this.removeAccents(this.filterSelection[i].name) === value) {
					// test if the chip already exist or if it is empty
					if (this.filterSelection[i].selection.includes(event) || event === '') {
						return;
					} else {
						if (this.filterSelection[i].limited) {
							this.filterSelection[i].selection = [];
							this.filterSelection[i].selection.push(event);
						} else {
							this.filterSelection[i].selection.push(event);
						}
					}
				}
			}
		}

		limitChips(filterItem: FilterItem): unknown[] {
			if (filterItem.showAll) {
				return filterItem.selection;
			}

			return filterItem.selection.slice(0, this.chipsLimit);
		}

		resetFilter(index: number): void {
			this.$set(this.filterSelection[index], 'selection', []);
		}

		removeChip(filterIndex: number, chipIndex: number): void {
			this.filterSelection[filterIndex].selection.splice(chipIndex, 1);
		}

		displayHiddenChips(index: number): void {
			this.$set(this.filterSelection[index], 'showAll', true);
		}

		showExpandChip(index: number): boolean {
			const currentFilter = this.filterSelection[index];
			return !currentFilter.showAll && (currentFilter.selection.length > this.chipsLimit);
		}

		resetAllFilters(): void {
			for (let index = 0; index < this.filters.length; index++) {
				this.$set(this.filterSelection[index], 'selection', []);
			}
		}

		closeSidebar(): void {
			this.showSideBar = false;
		}

		parseChips(chip: string): string {
			let newChip = chip;
			if (dayjs(chip, 'YYYY-MM-DD').isValid()) {
				const FRENCH_DATE_FORMAT = 'DD/MM/YYYY';
				newChip = dayjs(chip).format(FRENCH_DATE_FORMAT);
			} else if (Array.isArray(chip)) {
				newChip = chip.join(' - ');
			}
			return newChip;
		}

		mounted() {
			this.filterSelection = this.filters.map(filter => ({
				name: filter.name,
				label: filter.label,
				description: filter.description ?? '',
				limited: filter.limited ?? false,
				selection: filter.selection ?? [],
				showAll: false
			}));
		}
	}
</script>

<style lang="scss">
@import '@cnamts/design-tokens/dist/tokens';

.new-filter {
	//sidebar mode
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
	#up-icon {
		display: inline;
	}
	#down-icon {
		display: none;
	}
	.v-expansion-panel-header--active {
		#up-icon {
			display: none !important;
		}
		#down-icon {
			display: inline !important;
		}
	}
	.header-title {
		font-weight: 500;
		font-size: 16px;
	}

	//simple mode
	.simple-mode-filters {
		color: $vd-primary;
		border-radius: 20px;
		text-transform: capitalize;
	}
	.expansion-panels {
		margin-left: 1px;
	}
	.v-navigation-drawer {
		box-shadow: -3px 3px 5px #0000001f;
	}
	.v-navigation-drawer__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
}
.description-text-filter {
	color: $vd-grey-lighten-20;
	font-size: 14px !important;
}
.bg-cyan.v-chip.v-chip--outlined.v-chip.v-chip {
	background-color: $vd-cyan-lighten-90 !important;
}

</style>
