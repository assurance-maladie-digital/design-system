<template>
	<div>
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			:loading="loading"
			hide-default-footer
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:loading="loading"
					:nb-total="items.length"
					show-add-btn
				/>
			</template>
		</VDataTable>

		<VSwitch
			v-model="loading"
			label="Chargement"
			hide-details
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

		loading = true;

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
				firstname: 'Édith',
				lastname: 'Cartier',
				email: 'edith.cartier@example.com'
			},
			{
				firstname: 'Eustache',
				lastname: 'Dubois',
				email: 'eustache.dubois@example.com'
			}
		];
	}
</script>
