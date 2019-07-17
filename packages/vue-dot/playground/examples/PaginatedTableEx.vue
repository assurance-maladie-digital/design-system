<template>
	<DocSection title="PaginatedTable">
		<!--
			On PaginatedTable, we don't need the .sync modifier
			for :pagination

			To avoid using a watcher, we use the pagination:updated event
			When this event is fired, we update the pagination
			then fetch the data from the API
		-->
		<PaginatedTable
			:headers="headers"
			:items="desserts"
			:pagination="pagination"
			:total-items="totalDesserts"
			:loading="loading"
			class="vd-table elevation-1"
			@pagination:updated="pagination = $event; fetchData()"
		>
			<template #items="props">
				<td>{{ props.item.name }}</td>

				<td class="text-xs-right">
					{{ props.item.calories }}
				</td>

				<td class="text-xs-right">
					{{ props.item.fat }}
				</td>

				<td class="text-xs-right">
					{{ props.item.carbs }}
				</td>

				<td class="text-xs-right">
					{{ props.item.protein }}
				</td>

				<td class="text-xs-right">
					{{ props.item.iron }}
				</td>
			</template>
		</PaginatedTable>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	interface Dessert {
		[key: string]: string | number;

		name: string;
		calories: number;
		fat: number;
		carbs: number;
		protein: number;
		iron: string;
	}

	interface Pagination {
		descending: boolean;
		page: number;
		rowsPerPage: number;
		sortBy: string | null;
		totalItems: number;
	}

	interface DataObj {
		items: Dessert[];
		total: number;
	}

	/**
	 * This is the Vuetify example
	 * https://vuetifyjs.com/en/components/data-tables#paginate-and-sort-server-side
	 * converted to TypeScript and using PaginatedTable
	 */
	@Component
	export default class PaginatedTableEx extends Vue {
		totalDesserts = 0;

		desserts: Dessert[] = [];

		loading = true;

		// Default value for pagination
		pagination: Pagination = {
			descending: false,
			page: 1,
			rowsPerPage: 5,
			sortBy: null,
			totalItems: 0
		};

		headers = [
			{
				text: 'Dessert (100g serving)',
				align: 'left',
				sortable: false,
				value: 'name'
			},
			{
				text: 'Calories',
				align: 'right',
				value: 'calories'
			},
			{
				text: 'Fat (g)',
				align: 'right',
				value: 'fat'
			},
			{
				text: 'Carbs (g)',
				align: 'right',
				value: 'carbs'
			},
			{
				text: 'Protein (g)',
				align: 'right',
				value: 'protein'
			},
			{
				text: 'Iron (%)',
				align: 'right',
				value: 'iron'
			}
		];

		/** Fetch data when rendered */
		mounted() {
			this.fetchData();
		}

		fetchData() {
			this.getDataFromApi()
				.then((value) => {
					const data = value as DataObj;

					this.desserts = data.items;
					this.totalDesserts = data.total;
				});
		}

		/**
		 * This function returns a promise
		 * After 1 second, it will return an API-like object
		 *
		 * it handles sorting and pagination
		 */
		getDataFromApi() {
			this.loading = true;

			return new Promise((resolve, reject) => {
				const { sortBy, descending, page, rowsPerPage } = this.pagination;

				let items: Dessert[] = this.getDesserts();
				const total = items.length;

				// Sorting algorithm
				if (this.pagination.sortBy && sortBy) {
					items = items.sort((a, b) => {
						const sortA = a[sortBy];
						const sortB = b[sortBy];

						if (descending) {
							if (sortA < sortB) {
								return 1;
							}

							if (sortA > sortB) {
								return -1;
							}

							return 0;
						} else {
							if (sortA < sortB) {
								return -1;
							}

							if (sortA > sortB) {
								return 1;
							}

							return 0;
						}
					});
				}

				// Pagination
				if (rowsPerPage > 0) {
					items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage);
				}

				// Resolve after 1 second
				setTimeout(() => {
					this.loading = false;

					resolve({
						items,
						total
					});
				}, 1000);
			});
		}

		/** Desserts data */
		getDesserts() {
			return [
				{
					name: 'Frozen Yogurt',
					calories: 159,
					fat: 6.0,
					carbs: 24,
					protein: 4.0,
					iron: '1%'
				},
				{
					name: 'Ice cream sandwich',
					calories: 237,
					fat: 9.0,
					carbs: 37,
					protein: 4.3,
					iron: '1%'
				},
				{
					name: 'Eclair',
					calories: 262,
					fat: 16.0,
					carbs: 23,
					protein: 6.0,
					iron: '7%'
				},
				{
					name: 'Cupcake',
					calories: 305,
					fat: 3.7,
					carbs: 67,
					protein: 4.3,
					iron: '8%'
				},
				{
					name: 'Gingerbread',
					calories: 356,
					fat: 16.0,
					carbs: 49,
					protein: 3.9,
					iron: '16%'
				},
				{
					name: 'Jelly bean',
					calories: 375,
					fat: 0.0,
					carbs: 94,
					protein: 0.0,
					iron: '0%'
				},
				{
					name: 'Lollipop',
					calories: 392,
					fat: 0.2,
					carbs: 98,
					protein: 0,
					iron: '2%'
				},
				{
					name: 'Honeycomb',
					calories: 408,
					fat: 3.2,
					carbs: 87,
					protein: 6.5,
					iron: '45%'
				},
				{
					name: 'Donut',
					calories: 452,
					fat: 25.0,
					carbs: 51,
					protein: 4.9,
					iron: '22%'
				},
				{
					name: 'KitKat',
					calories: 518,
					fat: 26.0,
					carbs: 65,
					protein: 7,
					iron: '6%'
				}
			];
		}
	}
</script>

<style lang="scss" scoped>
	// Make table take all width
	.vd-table {
		width: 100%;
	}
</style>
