<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { config } from './config'
import { locales } from './locales'

import { customizable } from '../../../mixins/customizable'

import { mdiCloseCircle, mdiWindowClose, mdiPencil } from '@mdi/js'

import type { FilterManagerItem } from './types'
import type { Field } from '@/form-builder/FormField/types'

export default defineComponent({
	props: {
		appliedFilters: {
			type: Array as PropType<Field[]>,
			required: true,
		},
	},
	mixins: [customizable(config)],
	emits: ['edit-filter', 'clear-filter', 'reset-filters'],
	data() {
		return {
			locales: locales,
			closeIcon: mdiCloseCircle,
			deleteIcon: mdiWindowClose,
			editIcon: mdiPencil,
		}
	},
	computed: {
		filters(): FilterManagerItem[] {
			const displayedFilters: FilterManagerItem[] = []

			this.appliedFilters.forEach((filter, index) => {
				const item = {
					index,
					filter,
				}

				if (filter.value) {
					displayedFilters.push(item)
				}
			})

			return displayedFilters
		},
		filtersCount(): string {
			const plural = this.filters.length > 1

			return `${this.filters.length} ${locales.filter(plural)}`
		},
	},
	methods: {
		editFilter(index: number): void {
			this.$emit('edit-filter', index)
		},
		clearFilter(index: number): void {
			this.$emit('clear-filter', index)
		},
		resetFilters(): void {
			this.$emit('reset-filters')
		},
	},
})
</script>

<template>
	<VMenu v-bind="options.menu">
		<template #activator="{ props }">
			<VBtn
				v-bind="{
					...props,
					...options.closeBtn,
				}"
			>
				{{ filtersCount }}

				<VIcon v-bind="options.resetFiltersBtn" @click="resetFilters">
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
					<VListItemTitle>
						<div class="vd-filter-manager my-2">
							{{ item.filter.fieldOptions?.filterTitle }}
						</div>
					</VListItemTitle>

					<VListItemAction>
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
					</VListItemAction>
				</div>
			</VListItem>
		</VList>
	</VMenu>
</template>

<style lang="scss" scoped>
.vd-filter-manager {
	width: 300px;
}
</style>
