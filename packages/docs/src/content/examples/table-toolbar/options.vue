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
				:vuetify-options="vuetifyOptions"
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
	export default class TableToolbarOptions extends Vue {
		search: string | null = null;

		vuetifyOptions = {
			toolbar: {
				color: '#f8f9fc'
			},
			textField: {
				outlined: true,
				dense: true
			},
			addBtn: {
				height: '40px'
			},
			addIcon: {
				class: 'd-none'
			}
		};

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
				firstname: 'Delphine',
				lastname: 'Robillard',
				email: 'delphine.robillard@example.com'
			},
			{
				firstname: 'Alexandre',
				lastname: 'Lazure',
				email: 'alexandre.lazure@example.com'
			}
		];
	}
</script>
