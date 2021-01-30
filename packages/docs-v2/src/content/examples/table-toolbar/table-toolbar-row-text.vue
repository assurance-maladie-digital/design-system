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
					row-text="fichier"
				/>
			</template>
		</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class TableToolbarRowText extends Vue {
		search = '';

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
				firstname: 'Simone',
				lastname: 'Bellefeuille',
				email: 'simone.bellefeuille@example.com'
			},
			{
				firstname: 'Jacques',
				lastname: 'Demers',
				email: 'jacques.demers@example.com'
			}
		];
	}
</script>
