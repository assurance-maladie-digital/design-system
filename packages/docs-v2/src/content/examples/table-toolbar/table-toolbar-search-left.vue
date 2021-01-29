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
			>
				<template #search-left>
					<VBtn class="mx-1 text-none" small>
						exemple
					</VBtn>
				</template>
			</TableToolbar>
		</template>
	</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class TableToolbarSearchLeft extends Vue {
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
