<template>
	<div>
		<!-- Commencez à développer ici -->
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			:loading="loading"
			calculate-widths
			hide-default-footer
			class="w-100 elevation-1"
			@current-items="filteredItems = $event"
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:loading="loading"
					:nb-total="items.length"
					:nb-filtered="filteredItems.length"
					search-label="Rechercher"
					row-text="fichier"
					show-add-btn
				>
					<template #search-left>
						<FilterModule
							:filters="filters"
							@filter-list="filterTable($event)"
						/>
					</template>
				</TableToolbar>
			</template>
		</VDataTable>

		<VSwitch
			v-model="loading"
			label="Chargement"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	@Component
	export default class Playground extends Vue {
		search = '';
		filteredItems: DataTableHeader[] = [];
		loading = false;
		headers: DataTableHeader[] = [
			{
				align: 'start',
				sortable: true,
				text: 'Nom',
				value: 'lastname'
			},
			{
				align: 'start',
				sortable: true,
				text: 'Prénom',
				value: 'firstname'
			}
		];
		items = [
			{
				firstname: 'Christophe',
				lastname: 'Colomb'
			},
			{
				firstname: 'Napoléon',
				lastname: 'Bonaparte'
			}
		];
		filters = [
			{
				key: 'name',
				type: 'select',
				multiple: true,
				dynamic: true,
				items: [
					{
						text: 'Email',
						value: 'email'
					},
					{
						text: 'Courrier',
						value: 'mail'
					},
					{
						text: 'SMS',
						value: 'sms'
					}
				],
				value: null,
				fieldOptions: {
					outlined: true,
					modalTitle: 'Moyen de contact'
				}
			},
			{
				key: 'number',
				type: 'range',
				min: 0,
				max: 100,
				value: null,
				fieldOptions: {
					outlined: true,
					modalTitle: 'Ranged numbers'
				}
			},
			{
				key: 'date',
				type: 'period',
				from: '',
				to: '',
				value: null,
				fieldOptions: {
					outlined: true,
					modalTitle: 'Periode'
				}
			}
		];
		filterTable(filters: Field[]): void {
			// eslint-disable-next-line
			console.log(filters);
		}
	}
</script>
