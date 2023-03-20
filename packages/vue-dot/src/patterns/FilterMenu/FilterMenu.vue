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
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { FilterItem } from './types';
	import { locales } from './locales';
	import { mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
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
		filterIcon = mdiFilterVariant;
		filtersCount = 0;

		showSideBar = false;
		filters: FilterItem[] = this.value;

		removeAccents(str: string): string | undefined {
			return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		}

		openCloseSidebar(): void {
			this.showSideBar = !this.showSideBar;
		}

		closeSidebar(): void {
			this.showSideBar = false;
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
