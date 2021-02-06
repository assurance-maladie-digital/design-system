<template>
	<DocSection title="TableToolbar">
		<VDataTable
			:headers="headers"
			:items="items"
			:search="search"
			:loading="loading"
			calculate-widths
			hide-default-footer
			class="w-100 elevation-1"
			@current-items="filteredItems = $event"
		>
			<template #top>
				<TableToolbar
					v-model="search"
					:loading="loading"
					:nb-total="items.length"
					:nb-filtered="filteredItems.length"
					search-label="Rechercher"
					row-text="fichier"
					show-add-btn
				/>
			</template>
		</VDataTable>

		<VSwitch
			v-model="loading"
			label="Chargement"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataTableHeader } from 'vuetify';

	@Component
	export default class CopyBtnEx extends Vue {
		search = '';
		filteredItems: DataTableHeader[] = [];
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
