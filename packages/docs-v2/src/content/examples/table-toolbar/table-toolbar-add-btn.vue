<template>
	<VDataTable
		:headers="headers"
		:items="items"
		:search="search"
		hide-default-footer
	>
		<template #top>
			<TableToolbar
				v-model="search"
				:nb-total="items.length"
				show-add-btn
			/>
		</template>
	</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class TableToolbarAdd extends Vue {
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
	}
</script>
