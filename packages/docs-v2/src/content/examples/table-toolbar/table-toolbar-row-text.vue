<template>
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			class="w-100 elevation-1"
			hide-default-footer
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:nb-total="items.length"
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
