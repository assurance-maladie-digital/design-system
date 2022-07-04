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
						:filters="filters"
						class="mr-4"
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

	interface TableItem {
		[key: string]: string;
		firstname: string;
		lastname: string;
		email: string;
	}

	@Component
	export default class FilterModuleTableToolbar extends Vue {
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

		items: TableItem[] = [
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
				type: 'text',
				value: null,
				fieldOptions: {
					outlined: true,
					hideDetails: true,
					key: 'lastname',
					label: 'Nom',
					filterTitle: 'Nom'
				}
			},
			{
				type: 'text',
				value: null,
				fieldOptions: {
					outlined: true,
					hideDetails: true,
					key: 'firstname',
					label: 'Prénom',
					filterTitle: 'Prénom'
				}
			}
		];

		displayFIlters(filters: Field[]): void {
			if (filters === null) {
				this.filteredItem = this.items;
				return;
			}

			filters.forEach(({ value, fieldOptions }: Field) => {
				if (value === null || !fieldOptions) {
					return;
				}

				this.filteredItem = this.items.filter(element => {
					const itemValue = element[fieldOptions.key as string];
					const filterValue = value as string;

					return itemValue.toLowerCase().match(filterValue.toLowerCase());
				});
			});
		}
	}
</script>
