<template>
	<div>
		<VLayout>
			<div class="mt-5 pa-0 mr-2">
				<span class="grey lighten-3 pa-2 px-3">
					{{ tableItems.length }} items
				</span>
			</div>

			<VSpacer />

			<div class="mt-3 pa-0 select-width">
				<VSelect
					v-model="selectedItem"
					:items="selectedList"
					placeholder="Nb lignes/page"
					label="Nb lignes/page"
					solo
					flat
				/>
			</div>
		</VLayout>

		<VLayout
			column
			class="table-width"
		>
			<VDataTable
				:headers="tableHeaders"
				:items="tableItems"
				:items-per-page="nbSelectedItem"
				:page.sync="page"
				:header-props="headerProps"
				hide-default-footer
				must-sort
				@page-count="pageCount = $event"
			/>

			<Pagination
				v-model="page"
				:page-count="pageCount"
			/>
		</VLayout>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiMenuDown } from '@mdi/js';

	@Component
	export default class DataTableEx extends Vue {
		page = 1;
		pageCount = 0;

		selectedList = [10, 20 , 30, 50, 100];
		selectedItem = '';

		headerProps = {
			sortIcon: mdiMenuDown
		};

		tableHeaders = [
			{ text: 'Header 1', value: 'content1' },
			{ text: 'Header 2', value: 'content2' },
			{ text: 'Header 3', value: 'content3' }
		];

		tableItems = [
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' },
			{ content1: 'TOTO', content2: 'TATA', content3: 'TITI' }
		];

		get nbSelectedItem(): number {
			return this.selectedItem ? Number(this.selectedItem) : 10;
		}
	}
</script>

<style lang="scss" scoped>
	.select-width {
		width: 200px
	}
	.table-width {
		width: 100%
	}
</style>
