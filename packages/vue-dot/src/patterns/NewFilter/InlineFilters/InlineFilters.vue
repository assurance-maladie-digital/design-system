<template>
	<div class="vd-inline-filters">
		<span
			v-if="!hideInlineMessage"
			class="mr-3"
		>Filter par :</span>
		<VMenu
			v-for="(filter, index) in filters"
			:key="index"
			:close-on-content-click="false"
			min-width="300px"
			max-width="400px"
			offset-y
			nudge-bottom="10px"
		>
			<template #activator="{ on }">
				<VBtn
					color="secondary"
					:style="filters[index]?.style"
					:outlined="!filters[index]?.chips.length"
					depressed
					rounded
					class="simple-mode-filters mr-4"
					v-on="on"
				>
					<VChip
						v-if="filters[index]?.chips.length"
						class="ml-n2 mr-2"
						color="white"
						small
					>
						<span :class="filters[index]?.chips.length !== 0 ?? 'mb-2'">
							{{ filters[index]?.chips.length }}
						</span>
					</VChip>

					<span class="text-none">{{ filter.label }}</span>

					<VIcon
						:dense="filters[index].icon ? true : false"
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
					@remove-chip="resetFilter"
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
			<span class="text-none">{{ locales.more }}</span>
			<VIcon
				color="primary"
				class="ml-2"
			>
				{{ filterIcon }}
			</VIcon>
		</VBtn>
		<VBtn
			v-if="applyButton"
			depressed
			class="ml-4 mr-2 text-capitalize"
			color="primary"
			@click.stop="applyFunction"
		>
			{{ locales.apply }}
		</VBtn>
		<VBtn
			v-if="!hideReset"
			text
			class="text-capitalize"
			color="indigo"
			@click.stop="resetAllFilters"
		>
			{{ locales.reset }}
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';

	import Component from 'vue-class-component';
	import ChipsList from '../ChipsList';

	import { locales } from '../locales';
	import { FilterItem } from '../types';
	import { mdiWindowClose, mdiChevronDown, mdiFilterVariant } from '@mdi/js';

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
			sideBarButton: {
				type: Boolean,
				default: true
			},
			applyButton: {
				type: Boolean,
				required: true
			},
			applyFunction: {
				type: Function,
				required: true
			},
			hideReset: {
				type: Boolean,
				required: true
			},
			hideInlineMessage: {
				type: Boolean,
				required: true
			}
		}
	});

	@Component<InlineFilters>({
		components: {
			ChipsList
		}
	})
	export default class InlineFilters extends Props {
		locales = locales;
		downIcon = mdiChevronDown;
		deleteIcon = mdiWindowClose;
		filterIcon = mdiFilterVariant;

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		get filtersCount(): number {
			let count = 0;

			this.filters.forEach(filter => {
				if (filter?.selection?.length) {
					count = count + filter.selection.length;
				}
			});

			return count;
		}

		removeAccents(str: string): string | undefined {
			return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
		}

		openCloseSidebar(): void {
			this.$emit('open-close-sidebar');
		}

		resetAllFilters(): void {
			for (let index = 0; index < this.filters.length; index++) {
				this.$set(this.filters[index], 'chips', []);
			}

			this.$emit('update:value', this.filters);
		}

		resetFilter(): void {
			this.$emit('reset-filter');
		}

	}
</script>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

</style>
