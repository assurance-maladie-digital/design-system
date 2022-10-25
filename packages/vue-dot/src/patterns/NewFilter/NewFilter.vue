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
							:outlined="!filters[index]?.chips.length"
							v-on="on"
						>
							<v-chip
								v-if="filters[index]?.chips.length"
								class="ml-n2 mr-2"
								color="white"
								small
							>
								{{ filters[index]?.chips[0].value }}
								<span v-if="filters[index]?.chips.length > 1">
									(+ {{ filters[index]?.chips.length - 1 }})
								</span>
							</v-chip>
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
							v-if="filters[index]"
							class="mb-4"
							column
						>
							<v-chip
								v-for="(chip, chipIndex) in limitChips(filters[index])"
								:key="chipIndex"
								small
								close
								class="mt-2"
								:close-icon="deleteIcon"
								color="cyan-darken-40"
								text-color="white"
								@click:close="removeChip(index, chipIndex)"
							>
								{{ chip.text ?? chip.value ?? chip }}
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
								{{ `+${filters[index].chips.length - chipsLimit}` }}
							</v-chip>
							<v-chip
								v-if="filters[index].showAll"
								small
								outlined
								color="cyan-lighten-60"
								text-color="cyan-darken-40"
								class="mt-2 bg-cyan"
								@click.stop="() => onHideAll(index)"
							>
								<VIcon>
									{{ upIcon }}
								</VIcon>
							</v-chip>
							<v-btn
								v-if="filters[index].chips.length"
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
								change: event => onChange(event, filter, index)
							}"
							:attrs="{
								value: filter.value
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
										<span v-if="filters[index].chips.length">
											({{ filters[index].chips.length }})
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
									v-if="filters[index]"
									class="mx-3"
									column
								>
									<v-chip
										v-for="(chip, chipIndex) in limitChips(filters[index])"
										:key="chipIndex"
										small
										close
										class="mt-2"
										:close-icon="deleteIcon"
										color="cyan-darken-40"
										text-color="white"
										@click:close="removeChip(index, chipIndex)"
									>
										{{ chip.text ?? chip.value ?? chip }}
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
										{{ `+${filters[index].chips.length - chipsLimit}` }}
									</v-chip>
									<v-chip
										v-if="showExpandChip(index) && filters[index].showAll"
										small
										outlined
										color="cyan-lighten-60"
										text-color="cyan-darken-40"
										class="mt-2 bg-cyan"
										@click.stop="() => onHideAll(index)"
									>
										<VIcon>
											{{ upIcon }}
										</VIcon>
									</v-chip>
									<v-btn
										v-if="filters[index].chips.length"
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
											change: event => onChange(event, filter, index)
										}"
										:attrs="{
											value: filter.value
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
							:class="isMobile ? '' : 'mb-2 mr-4 button-complex-mode'"
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
							:class="isMobile ? 'mb-2 mt-2' : 'button-complex-mode'"
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
	import { FilterItem } from './types';

	import { locales } from './locales';

	import { mdiChevronUp, mdiChevronDown, mdiWindowClose, mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			simpleMode: {
				type: Boolean,
				default: false
			},
			chipsLimit: {
				type: Number,
				default: 4
			},
			value: {
				type: Array as PropType<FilterItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<NewFilter>({
		model: {
			prop: 'value',
			event: 'update:value'
		},
		watch: {
			value(newValue: FilterItem[]) {
				this.filters = newValue;
			}
		}
	})
	export default class NewFilter extends MixinsDeclaration {
		locales = locales;
		deleteIcon = mdiWindowClose;
		filterIcon = mdiFilterVariant;
		upIcon = mdiChevronUp;
		downIcon = mdiChevronDown;

		filters: FilterItem[] = this.value;

		showSideBar = false;

		get filtersCount(): number {
			let count = 0;

			this.filters.forEach(filter => {
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

		limitChips(filterItem: FilterItem): unknown[] {
			if (filterItem.showAll) {
				return filterItem.chips;
			}

			return filterItem.chips.slice(0, this.chipsLimit);
		}

		resetFilter(index: number): void {
			this.$set(this.filters[index], 'chips', []);
			this.$emit('update:value', this.filters);
		}

		removeChip(filterIndex: number, chipIndex: number): void {
			const chips = this.filters[filterIndex].chips.filter((chip, index) => index !== chipIndex);
			this.$set(this.filters[filterIndex], 'chips', chips);
			this.$emit('update:value', this.filters);
		}

		displayHiddenChips(index: number): void {
			this.$set(this.filters[index], 'showAll', true);
			this.$emit('update:value', this.filters);
		}

		showExpandChip(index: number): boolean {
			const currentFilter = this.filters[index];
			return !currentFilter.showAll && (currentFilter.chips.length > this.chipsLimit);
		}

		resetAllFilters(): void {
			for (let index = 0; index < this.filters.length; index++) {
				this.$set(this.filters[index], 'chips', []);
			}
			this.$emit('update:value', this.filters);
		}

		closeSidebar(): void {
			this.showSideBar = false;
		}

		onChange(event: unknown, filter: FilterItem, index: number): void {
			const newChip = {
				text: filter.miseEnForm ? filter.miseEnForm(event) : event,
				value: event
			};
			let chips = [];

			if (filter.limited) {
				chips = [
					newChip
				];
			} else {
				chips = [
					...filter.chips,
					newChip
				];
			}

			this.$set(this.filters[index], 'chips', chips);
			this.$set(this.filters[index], 'value', event);

			this.$emit('update:value', this.filters);
		}

		onHideAll(index: number): void {
			this.$set(this.filters[index], 'showAll', !this.filters[index].showAll);
			this.$emit('update:value', this.filters);
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
	.button-complex-mode {
		width: 49%;
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
