<template>
	<DocSection title="TableToolbar">
		<p>Barre de recherche pour tableau</p>

		<VDataTable
			:headers="headers"
			calculate-widths
			:items="items"
			:search="search"
			:loading="tableLoading"
			hide-default-footer
			@current-items="filteredItems = $event"
		>
			<!-- Barre de recherche dans le tableau -->
			<template #top>
				<TableToolbar
					:search="search"
					:table-loading="tableLoading"
					search-label="Rechercher"
					create-btn-label="Ajouter"
					show-create-btn
					row-text="fichier"
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

	import { mdiPlusCircle } from '@mdi/js';
	import { DataTableHeader } from 'vuetify';

	@Component
	export default class CopyBtnEx extends Vue {
		plusIcon = mdiPlusCircle;

		search = '';
		filteredItems: DataTableHeader[] = [];
		tableLoading = false;

		headers: DataTableHeader[] = [
			{
				align: 'start',
				sortable: true,
				text: 'nom',
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
				lastname: 'bonaparte'
			}
		];
	}
</script>
