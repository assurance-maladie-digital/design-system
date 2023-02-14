<template>
	<div class="vd-new-filter">
		<InlineFilters
			v-if="simpleMode"
			:filters="filters"
			:apply-button="applyButton"
			:chips-limit="chipsLimit"
			:side-bar-button="sideBarButton"
			:apply-function="applyFunction"
			:hide-reset="hideReset"
			:limited-inline-filter="limitedInlineFilter"
			@open-close-sidebar="openCloseSidebar"
		>
			<template
				v-for="filter in filters"
				:slot="'filter-' + filter.name"
			>
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
			</template>
		</InlineFilters>

		<VBtn
			v-else
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

		<FiltersSideBar
			v-if="showSideBar"
			:filters="filters"
			:apply-button="applyButton"
			:chips-limit="chipsLimit"
			:apply-function="applyFunction"
			@close-sidebar="closeSidebar"
		>
			<template
				v-for="filter in filters"
				:slot="'filter-' + filter.name"
			>
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
			</template>
		</FiltersSideBar>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import ChipsList from './ChipsList';
	import FiltersSideBar from './FiltersSideBar';
	import InlineFilters from './InlineFilters';

	import { FilterItem } from './types';
	import { locales } from './locales';
	import { mdiChevronUp, mdiChevronDown, mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			simpleMode: {
				type: Boolean,
				default: false
			},
			sideBarButton: {
				type: Boolean,
				default: false
			},
			applyButton: {
				type: Boolean,
				default: false
			},
			hideReset: {
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
			},
			limitedInlineFilter: {
				type: Array as PropType<string[]>,
				default: () => []
			},
			applyFunction: {
				type: Function,
				default: () => {
					return;
				}
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
		},
		components: {
			ChipsList,
			FiltersSideBar,
			InlineFilters
		}
	})
	export default class NewFilter extends MixinsDeclaration {
		locales = locales;
		filterIcon = mdiFilterVariant;
		upIcon = mdiChevronUp;
		downIcon = mdiChevronDown;
		filtersCount = 0;

		filters: FilterItem[] = this.value;

		showSideBar = false;

		removeAccents(str: string): string | undefined {
			return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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

			this.$emit('update:value', this.filters);
		}

		removeChip(event: object): void {
			this.$emit('remove-chip', event);
		}

		resetFilter(): void {
			this.$emit('reset-filter');
		}

		onChange(event: unknown, filter: FilterItem): void {
			if (!event) {
				return;
			}

			const newChip = {
				text: filter.formatting ? filter.formatting(event) : event,
				value: event
			};

			let chips: unknown[] = [];

			const chipExist = filter.chips.some(chip => chip.value === newChip.value);

			if (chipExist) {
				return;
			} else if (filter.splited) {
				if (Object.values(event as object).length) {
					chips = Object.values(event as object).map((value: unknown) => ({
						text: filter.formatting ? filter.formatting(value) : value,
						value
					}));
				} else {
					chips = [];
				}
			} else if (filter.limited) {
				chips = [
					newChip
				];
			} else {
				chips = [
					...filter.chips,
					newChip
				];
			}

			this.$set(filter, 'chips', chips);

			if (filter.clearAfterValidate) {
				this.$set(filter, 'value', filter.defaultValue ?? null);
			}

			this.$emit('update:value', this.filters);
		}
	}
</script>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

	.new-filter {
		.simple-mode-filters {
			color: $vd-primary;
			border-radius: 20px;
			text-transform: capitalize;
		}

		.v-navigation-drawer {
			box-shadow: -3px 3px 5px #0000001f;
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
