<template>
	<div class="vd-inline-filters">
		<VMenu
			v-for="(filter, index) in filterList"
			:key="index"
			:close-on-content-click="false"
			min-width="300px"
			max-width="400px"
			offset-y
			nudge-bottom="10px"
		>
			<template #activator="{ on }">
				<VBtn
					v-if="filters[index]"
					color="secondary"
					:style="filters[index].style"
					:outlined="!filters[index].chips.length"
					depressed
					rounded
					class="simple-mode-filters mr-4"
					v-on="on"
				>
					<VChip
						v-if="filters[index].chips.length"
						class="ml-n2 mr-2"
						color="white"
						small
					>
						<span :class="filters[index].chips.length !== 0 ? '' : 'mb-2'">
							{{ filters[index].chips.length }}
						</span>
					</VChip>

					<span>{{ filter.label }}</span>

					<VIcon
						:dense="Boolean(filters[index].icon)"
						:class="{ 'ml-1': filters[index].icon }"
					>
						{{ filters[index].icon ? filters[index].icon : downIcon }}
					</VIcon>
				</VBtn>
			</template>

			<div class="px-4 white pt-3">
				<span class="description-text-filter mb-2 mt-4">
					{{ filter.description }}
				</span>

				<ChipsList
					v-if="filters[index].chips.length"
					:chips-limit="chipsLimit"
					:filter="filters[index]"
				/>

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
		</VMenu>

		<VBtn
			v-if="sideBarButton"
			text
			color="indigo"
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

			<VIcon color="primary">
				{{ filterIcon }}
			</VIcon>
		</VBtn>

		<VBtn
			v-if="applyButton"
			depressed
			class="ml-4 mr-2"
			color="primary"
			@click.stop="applyFunction"
		>
			{{ locales.apply }}
		</VBtn>

		<VBtn
			v-if="!hideReset"
			text
			color="indigo"
			@click.stop="resetAllFilters"
		>
			{{ locales.reset }}
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import ChipsList from '../ChipsList';

	import { FilterMixin } from '../../mixins/FilterMixin';
	import { FilterItem } from './types';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<FilterItem[]>,
				default: () => []
			},
			sideBarButton: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		FilterMixin
	);

	@Component<InlineFilters>({
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
	export default class InlineFilters extends MixinsDeclaration {

		locales = locales;

		filters: FilterItem[] = this.value;

		get filtersCount(): number {
			let count = 0;

			this.filters.forEach(filter => {
				if (filter?.selection?.length) {
					count = count + filter.selection.length;
				}
			});

			return count;
		}

		get filterList(): unknown {
			const filteredList: FilterItem[] = [];

			if (this.limitedFilters.length) {
				this.filters.forEach(filter => {
					if (this.limitedFilters.includes(filter.name)) {
						filteredList.push(filter);
					}
				});

				return filteredList;
			} else {
				return this.filters;
			}
		}

		openCloseSidebar(): void {
			this.$emit('open-close-sidebar');
		}

		resetAllFilters(): void {
			for (let index = 0; index < this.filters.length; index++) {
				this.$set(this.filters[index], 'chips', []);
			}
		}
	}
</script>
