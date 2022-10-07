<template>
	<div class="new-filter">
		<!-- mode with sidebar -->
		<VBtn
			v-if="!simpleMode"
			outlined
			class="sidebar-filter-button"
			@click="showSideBar = !showSideBar"
		>
			<span
				v-if="filtersCount"
				class="mr-2"
			>
				{{ filtersCount }}
			</span>
			<span
				class="mr-2"
			>
				Filtres
			</span>
			<VIcon>
				{{ filterIcon }}
			</VIcon>
		</VBtn>

		<!-- simple mode buttons -->
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
					nudge-bottom="10px"
					:close-on-content-click="false"
				>
					<template #activator="{ on }">
						<VBtn
							class="simple-mode-filters mr-4"
							outlined
							v-on="on"
						>
							<VIcon
								size="1rem"
								color="secondary"
								class="mr-2"
							>
								{{ getIcon(filterSelection[index]) }}
							</VIcon>
							<span>{{ filter.name }}</span>
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
							column
						>
							<v-chip
								v-for="chip in limitChips(filterSelection[index])"
								:key="chip"
								small
								close
								class="mt-2"
								:close-icon="deleteIcon"
							>
								{{ chip }}
							</v-chip>
							<v-chip
								v-if="showExpandChip(index)"
								small
								class="mt-2"
								@click="displayHiddenChips(index)"
							>
								{{ `+${filterSelection[index].selection.length - chipsLimit}` }}
							</v-chip>
							<v-chip
								v-if="filterSelection[index].showAll"
								small
								class="mt-2"
								@click="filterSelection[index].showAll = false"
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
								@click="resetFilter(index)"
							>
								Réinitialiser
							</v-btn>
						</v-chip-group>
						<VDivider
							v-if="filterSelection[index].selection.length"
							class="mt-2 mb-4"
						/>
						<slot
							:on="{
								change: (event) => addChips(event, removeAccents(filter.name))
							}"
							:name="`filter-${removeAccents(filter.name)}`"
						/>
					</div>
				</VMenu>
			</div>

			<!-- sidebar -->
			<VNavigationDrawer
				v-if="showSideBar && !simpleMode"
				permanent
				absolute
				right
				class="pt-2"
			>
				<v-expansion-panels
					accordion
					flat
				>
					<v-expansion-panel
						v-for="(filter, index) in filters"
						:key="index"
					>
						<v-expansion-panel-header class="d-block">
							<div
								class="header-title d-flex justify-space-between mt-3 mx-4"
							>
								<span>{{ filter.name }} <span v-if="filterSelection[index].selection.length">({{ filterSelection[index].selection.length }})</span></span>

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
									v-for="chip in limitChips(filterSelection[index])"
									:key="chip"
									small
									close
									class="mt-2"
									:close-icon="deleteIcon"
								>
									{{ chip }}
								</v-chip>
								<v-chip
									v-if="showExpandChip(index)"
									small
									class="mt-2"
									@click="displayHiddenChips(index)"
								>
									{{ `+${filterSelection[index].selection.length - chipsLimit}` }}
								</v-chip>
								<v-chip
									v-if="filterSelection[index].showAll"
									small
									class="mt-2"
									@click="filterSelection[index].showAll = false"
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
									@click="resetFilter(index)"
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
					class="ma-2 mb-16 mt-6"
					:class="isMobile ? '' : 'd-flex justify-space-between'"
				>
					<v-btn
						:class="isMobile ? '' : 'mb-2'"
						:outlined="isMobile"
						:text="!isMobile"
						:block="isMobile"
						small
						color="indigo"
						@click="showSideBar = !showSideBar"
					>
						Fermer
					</v-btn>
					<div>
						<v-btn
							:class="isMobile ? 'mb-2 mt-2' : ''"
							:block="isMobile"
							outlined
							small
							color="indigo"
							@click="resetAllFilters"
						>
							Réinitialiser
						</v-btn>
						<v-btn
							:class="isMobile ? '' : 'ml-2'"
							:block="isMobile"
							small
							color="primary"
							@click="emitFilter"
						>
							Appliquer
						</v-btn>
					</div>
				</div>
			</VNavigationDrawer>
		</div>
	</div>
</template>

<script lang="ts">
	//	eslint-disable max-lines
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import { FilterItem } from './types';

	import { locales } from './locales';

	import { mdiChevronUp, mdiChevronDown, mdiWindowClose, mdiFilterVariant, mdiNumeric1BoxMultipleOutline, mdiNumeric2BoxMultipleOutline, mdiNumeric3BoxMultipleOutline, mdiNumeric4BoxMultipleOutline, mdiNumeric5BoxMultipleOutline, mdiNumeric6BoxMultipleOutline, mdiNumeric7BoxMultipleOutline, mdiNumeric8BoxMultipleOutline, mdiNumeric9BoxMultipleOutline, mdiNumeric9PlusBoxMultipleOutline } from '@mdi/js';

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
	export default class FileUpload extends MixinsDeclaration {
		locales = locales;
		deleteIcon = mdiWindowClose;
		filterIcon = mdiFilterVariant;
		upIcon = mdiChevronUp;
		downIcon = mdiChevronDown;

		//number icons
		icon1  = mdiNumeric1BoxMultipleOutline;
		icon2  = mdiNumeric2BoxMultipleOutline;
		icon3  = mdiNumeric3BoxMultipleOutline;
		icon4  = mdiNumeric4BoxMultipleOutline;
		icon5  = mdiNumeric5BoxMultipleOutline;
		icon6  = mdiNumeric6BoxMultipleOutline;
		icon7  = mdiNumeric7BoxMultipleOutline;
		icon8  = mdiNumeric8BoxMultipleOutline;
		icon9  = mdiNumeric9BoxMultipleOutline;
		icon9Plus  = mdiNumeric9PlusBoxMultipleOutline;

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
					if (event !== '') {
						this.filterSelection[i].selection.push(event);
					}
				}
			}
		}

		getIcon(filterSelection: string): any {
			const count = filterSelection ? filterSelection.selection.length : 0;
			let icon;
			if (count) {
				if (count === 1) {
					icon = this.icon1;
				} else if (count === 2) {
					icon = this.icon2;
				} else if (count === 3) {
					icon = this.icon3;
				} else if (count === 4) {
					icon = this.icon4;
				} else if (count === 5) {
					icon = this.icon5;
				} else if (count === 6) {
					icon = this.icon6;
				} else if (count === 7) {
					icon = this.icon7;
				} else if (count === 8) {
					icon = this.icon8;
				} else if (count === 9) {
					icon = this.icon9;
				} else if (count > 9) {
					icon = this.icon9Plus;
				}
			}

			return icon;
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

		emitFilter(): void {
			console.log(this.filterSelection);
		}

		mounted() {
			this.filterSelection = this.filters.map(filter => ({
				name: filter.name,
				description: filter.description,
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
	.v-expansion-panel--active {
		border-radius: 8px !important;

		.open {
			display: none;
		}
		.closed {
			display: inline;
		}

		.header-title {
			color: $vd-am-blue-base;
		}
	}
	.header-title {
		font-weight: 500;
		font-size: 16px;
	}
	.sidebar-filter-button {
		border-radius: 20px;
	}

	//simple mode
	.simple-mode-filters {
		color: $vd-primary;
		border-radius: 20px;
		text-transform: capitalize;
	}

}
.description-text-filter {
	color: $vd-grey-lighten-20;
	font-size: 14px !important;
}
</style>
