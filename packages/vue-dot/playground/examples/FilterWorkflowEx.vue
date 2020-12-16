<template>
	<DocSection title="FilterWorkflow">
		<FilterWorkflow
			:rows="rows"
			:filters="filters"
			@change="rowsUpdated"
		/>

		<VDataTable
			:items="rowsFiltered"
			:headers="headers"
		/>

		<VBtn @click="rows = rows2">
			change lignes
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { dataFilters, dataRows } from '../../src/patterns/FilterWorkflow/tests/data/dataFilters';
	import { Filters, Rows } from '../../src/patterns/FilterWorkflow/types';

	@Component
	export default class FilterWorkflowEx extends Vue {

		rows: Rows = dataRows;
		rowsFiltered: Rows | [] = [];
		filters: Filters = dataFilters;

		headers = [
			{
				text: 'Fichier',
				value: 'filename'
			},
			{
				text: 'Nombre de téléchargement',
				value: 'nbDownload'
			},
			{
				text: 'Date',
				value: 'date'
			}
		];

		rows2: Rows = [
			...dataRows,
			{
				filename: 'fichier4.txt',
				nbDownload: 4,
				date: '31/12/2020'
			}
		];

		rowsUpdated(rows: Rows): void {
			this.rowsFiltered = rows;
		}

	}
</script>