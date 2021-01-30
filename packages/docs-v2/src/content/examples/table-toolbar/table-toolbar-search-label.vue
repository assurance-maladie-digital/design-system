<template>
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			hide-default-footer
			@current-items="filteredItems = $event"
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:nb-total="items.length"
					search-label="Rechercher un patient"
				/>
			</template>
		</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class TableToolbarSearchLabel extends Vue {
		search = '';

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
				firstname: 'Louis',
				lastname: 'Douis',
				email: 'louis.denis@example.com'
			},
			{
				firstname: 'Agate',
				lastname: 'Roy',
				email: 'agate.roy@example.com'
			}
		];
	}
</script>
