<template>
	<VMenu v-bind="options.menu">
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.closeBtn
				}"
				v-on="on"
			>
				{{ filtersCount }}

				<VIcon
					v-bind="options.closeIcon"
					@click="resetFilters"
				>
					{{ closeIcon }}
				</VIcon>
			</VBtn>
		</template>

		<VList v-bind="options.list">
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
				v-bind="options.listItem"
			>
				<div class="d-flex align-center">
					<div class="vd-filter-manager my-2">
						{{ item.filter.fieldOptions.filterTitle }}
					</div>

					<VBtn
						v-bind="options.editBtn"
						@click="editFilter(item.index)"
					>
						<VIcon v-bind="options.editIcon">
							{{ editIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						v-bind="options.deleteBtn"
						@click="clearFilter(item.index)"
					>
						<VIcon v-bind="options.deleteIcon">
							{{ deleteIcon }}
						</VIcon>
					</VBtn>
				</div>
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { mdiCloseCircle, mdiWindowClose, mdiPencil } from '@mdi/js';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';
	import { FilterManagerItem } from './types';

	const Props = Vue.extend({
		props: {
			appliedFilters: {
				type: Array as PropType<Field[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class FilterManager extends MixinsDeclaration {
		locales = locales;

		closeIcon = mdiCloseCircle;
		deleteIcon = mdiWindowClose;
		editIcon = mdiPencil;

		get filters(): FilterManagerItem[] {
			const displayedFilters: FilterManagerItem[] = [];

			this.appliedFilters.forEach((filter, index) => {
				let item = {
					index,
					filter
				};

				if (filter.value) {
					displayedFilters.push(item);
				}
			});

			return displayedFilters;
		}

		get filtersCount(): string {
			const plural = this.filters.length > 1;

			return `${this.filters.length} ${locales.filter(plural)}`;
		}

		editFilter(index: number): void {
			this.$emit('edit-filter', index);
		}

		clearFilter(index: number): void {
			this.$emit('clear-filter', index);
		}

		resetFilters(): void {
			this.$emit('reset-filters');
		}
	}
</script>

<style lang="scss" scoped>
	.vd-filter-manager {
		width: 300px;
	}
</style>
