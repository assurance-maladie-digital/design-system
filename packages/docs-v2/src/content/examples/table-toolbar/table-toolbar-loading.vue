<template>
	<div>
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			:loading="loading"
			hide-default-footer
			class="w-100 elevation-1"
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:loading="loading"
					:nb-total="items.length"
				/>
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

	@Component
	export default class TableToolbarLoading extends Vue {
		search = '';

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
	}
</script>
