<template>
	<VDataTable
		:headers="headers"
		:items="filteredItem"
		:search="search"
		hide-default-footer
	>
		<template #top>
			<TableToolbar
				v-model="search"
				:nb-total="items.length"
			>
				<template #search-left>
					<FilterModule
						class="mr-4"
						:filters="filters"
						@filter-list="displayFIlters"
					/>
				</template>
			</TableToolbar>
		</template>
	</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';
	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class TableToolbarAddBtn extends Vue {
		search: string | null = null;

		headers: DataTableHeader[] = [
			{
				text: 'Nom',
				value: 'lastname'
			},
			{
				text: 'Prénom',
				value: 'firstname'
			},
			{
				text: 'Email',
				value: 'email'
			}
		];

		items = [
			{
				firstname: 'Virginie',
				lastname: 'Beauchesne',
				email: 'virginie.beauchesne@example.com'
			},
			{
				firstname: 'Étienne',
				lastname: 'Salois',
				email: 'etienne.salois@example.com'
			}
		];

		filteredItem = this.items;

		filters: Field[] = [
			{
				key: 'lastname',
				type: 'text',
				value: null,
				fieldOptions: {
					label: 'Entrez un nom',
					hideDetails: true,
					outlined: true,
					filterTitle: 'Nom de famille'
				}
			},
			{
				key: 'firstname',
				type: 'text',
				value: null,
				fieldOptions: {
					label: 'Entrez un prénom',
					hideDetails: true,
					outlined: true,
					filterTitle: 'Prénom'
				}
			}
		];

		displayFIlters( filtersArray: Field[] ): void {
			this.$nextTick(() => {
				if(filtersArray === null) {
					this.filteredItem = this.items;
					return;
				}
				this.filteredItem = [];
				filtersArray.forEach((filter: Field) => {
					if(filter.value === null) {
						return;
					}

					this.items.forEach((element) => {
						Object.keys(element).forEach((key) => {
							if(key === filter.key) {
								if(filter.value === element[key]) {
									this.filteredItem.push(element);
								}
							}
						})
					});
				})
			});
		}
	}
</script>
