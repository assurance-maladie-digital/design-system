<template>
	<DocSection title="FilterWorkflow">
		<FilterWorkflow
			:rows="rows"
			:filters="filters"
			@change="rowsUpdated"
		/>

		<VList>
			<VListItem
				v-for="(row, index) in rowsFiltered"
				:key="index"
			>
				<VListItemContent>
					{{ JSON.stringify(row) }}
				</VListItemContent>
			</VListItem>
		</VList>
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
		rowsFiltered: Rows | null = null;
		filters: Filters = dataFilters;

		rowsUpdated(rows: Rows): void {
			this.rowsFiltered = rows;
		}

	}
</script>