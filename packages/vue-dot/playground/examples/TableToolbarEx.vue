<template>
	<DocSection title="TableToolbar">
		<p>Barre pour les tableaux avec un champ de recherche par défaut</p>

		<VDataTable
			:headers="headers"
			calculate-widths
			:items="items"
			:search="search"
			hide-default-footer
			class="w-100 elevation-1"
			@current-items="filteredItems = $event"
		>
			<template #top>
				<TableToolbar
					:search="search"
					:search-disabled="tableLoading"
					search-label="Rechercher"
					show-create-btn
					row-text="fichier"
					:vuetify-options="{
						textField: {
							dense: true
						},
						toolbar: {
							class: 'mt-4'
						},
						addBtn: {
							color: 'red'
						},
						addIcon: {
							color: 'red'
						}
					}"
					:nb-total="items.length"
					:nb-filtered="filteredItems.length"
					@search="search = $event"
				>
					<template #search-left>
						<VBtn
							small
							class="mr-4 text-none"
							@click="search = ''"
						>
							Reset
						</VBtn>
					</template>
				</TableToolbar>
			</template>
		</VDataTable>

		<VSwitch
			v-model="tableLoading"
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
		tableLoading = false;

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
