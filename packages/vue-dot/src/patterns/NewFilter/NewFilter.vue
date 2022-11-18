<template>
	<div class="vd-new-filter">
		<template v-if="simpleMode">
			<VMenu
				v-for="(filter, index) in filters"
				:key="index"
				:close-on-content-click="false"
				min-width="300px"
				max-width="400px"
				offset-y
				nudge-bottom="10px"
			>
				<!-- TODO: <template #activator="{ on }">
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
							<VChip
								v-if="filters[index]?.chips.length"
								class="ml-n2 mr-2"
								color="white"
								small
							>
								<span
									:class="filters[index]?.chips.length !== 0 ?? 'mb-2'"
								>
									{{ filters[index]?.chips.length }}
								</span>
							</VChip>
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
							@remove="removeSelection"
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

						<span>{{ filter.label }}</span>

						<VIcon
							:dense="filters[index].icon"
							:class="{ 'ml-1': filters[index].icon }"
						>
							{{ filters[index].icon ? filters[index].icon : downIcon }}
						</VIcon>
					</VBtn>
				</template> -->

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
				v-if="!hideReset"
				text
				small
				color="indigo"
				@click.stop="resetAllFilters"
			>
				{{ locales.reset }}
			</VBtn>
		</template>

		<VBtn
			v-else
			depressed
			rounded
			color="transparent"
			@click="showSideBar = !showSideBar"
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
</template>

<script lang="ts">
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
			return str.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
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

		removeSelection(): void {
			console.log('selection removed');
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
