<template>
	<VMenu offset-y>
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="[attrs, options.btn]"
				v-on="on"
			>
				{{ displayFiltersCount }}

				<VIcon
					v-bind="options.closeIcon"
					@click="resetFilters"
				>
					{{ closeIcon }}
				</VIcon>
			</VBtn>
		</template>
		<VList>
			<VListItem
				v-for="(item, index) in displayFiltersRow"
				:key="index"
			>
				<div class="d-flex align-center">
					<div class="vd-filter-manager">
						<div class="my-2">
							{{ item.filter.fieldOptions.modalTitle }}
						</div>
					</div>

					<VBtn
						icon
						@click="editFilter(item.index)"
					>
						<VIcon
							v-bind="options.icon"
						>
							{{ editIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						icon
						@click="clearFilter(item.index)"
					>
						<VIcon
							v-bind="options.icon"
						>
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
		// Locales
		locales = locales;

		// Icon
		closeIcon = mdiCloseCircle;
		deleteIcon = mdiWindowClose;
		editIcon = mdiPencil;

		editFilter(index: number): void {
			this.$emit('edit-filter', index);
		}

		clearFilter(index: number): void {
			this.$emit('clear-filter', index);
		}

		resetFilters(): void {
			this.$emit('reset-filters');
		}

		get displayFiltersRow(): FilterManagerItem[] {
			const displayedFilters: FilterManagerItem[] = [];
			this.appliedFilters.forEach((filter, index) => {
				let item = {
					index,
					filter
				};
				if(filter.value) {
					displayedFilters.push(item);
				}
			});
			return displayedFilters;
		}

		get displayFiltersCount(): string {
			return `${this.displayFiltersRow.length} ${this.displayFiltersRow.length > 1 ? locales.filters : locales.filter}`;
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-filter {
			&-manager {
				width:300px;
			}
		}
	}
</style>
