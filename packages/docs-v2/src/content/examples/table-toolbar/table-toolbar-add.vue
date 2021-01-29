<template>
	<VDataTable
		:headers="headers"
		:items="items"
		:search="search"
		hide-default-footer
		class="w-100 elevation-1"
	>
		<template #top>
			<TableToolbar
				v-model="search"
				:nb-total="items.length"
				:add-btn-label="addBtnLabel"
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

		addBtnLabel = 'Ajouter un patient';

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
	}
</script>
