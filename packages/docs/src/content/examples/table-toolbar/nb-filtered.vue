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
					:nb-filtered="filteredItems.length"
				/>
			</template>
		</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class TableToolbarNbFiltered extends Vue {
		search: string | null = null;

		filteredItems: DataTableHeader[] = [];

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
				firstname: 'Aimée',
				lastname: 'Josseaume',
				email: 'aimee.josseaume@example.com'
			},
			{
				firstname: 'Serge',
				lastname: 'Rivard',
				email: 'serge.rivard@example.com'
			}
		];
	}
</script>
