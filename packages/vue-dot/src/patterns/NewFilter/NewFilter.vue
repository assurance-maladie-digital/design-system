<template>
	<div class="vd-new-filter">
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
							rounded
							:style="filters[index]?.style"
							:outlined="!filters[index]?.chips.length"
							v-on="on"
						>
							<v-chip
								v-if="filters[index]?.chips.length"
								class="ml-n2 mr-2"
								color="white"
								small
							>
								<span
									:class="!filters[index]?.chips.length === 0 ?? 'mb-2'"
								>
									{{ filters[index]?.chips.length }}
								</span>
							</v-chip>
							<span>{{ filter.label }}</span>
							<VIcon
								:dense="filters[index].icon ? true : false"
								:class="{ 'ml-1' : filters[index].icon}"
							>
								{{ filters[index].icon ? filters[index].icon : downIcon }}
							</VIcon>
						</VBtn>
					</template>
					<div
						class="px-4 white pt-3"
					>
						<span class="description-text-filter mb-2 mt-4">{{ filter.description }}</span>
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
					v-if="!hideReset"
					text
					small
					color="indigo"
					@click.stop="resetAllFilters"
				>
					{{ locales.reset }}
				</VBtn>
			</div>

			<!-- complex mode -->
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

			<!-- sidebar -->
			<FiltersSideBar
				v-if="showSideBar && !simpleMode"
				:filters="filters"
				:chips-limit="chipsLimit"
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
	</div>
</template>

<script lang="ts">
	//	eslint-disable max-lines
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import ChipsList from './ChipsList';
	import FiltersSideBar from './FiltersSideBar';

	import { FilterItem } from './types';
	import { locales } from './locales';
	import { mdiChevronUp, mdiChevronDown, mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			simpleMode: {
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
		},
		components: {
			ChipsList,
			FiltersSideBar
		}
	})
	export default class NewFilter extends MixinsDeclaration {
		locales = locales;
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

		removeAccents(str: string): string | undefined {
			const newString = str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
			return newString;
		}

		closeSidebar(): void {
			this.showSideBar = false;
		}

		onChange(event: unknown, filter: FilterItem): void {
			if (!event) {
				return;
			}

			const newChip = {
				text: filter.formatting ? filter.formatting(event) : event,
				value: event
			};
			let chips: any[] = [];

			const chipExist = filter.chips.some(chip => chip.value === newChip.value);

			if (chipExist) {
				return;
			}

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
	//simple mode
	.simple-mode-filters {
		color: $vd-primary;
		border-radius: 20px;
		text-transform: capitalize;
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
