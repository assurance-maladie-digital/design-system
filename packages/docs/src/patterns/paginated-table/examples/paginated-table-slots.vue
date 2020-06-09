<template>
	<PaginatedTable
		:headers="headers"
		:items="users"
		:options.sync="options"
		:server-items-length="totalUsers"
		:loading="loading"
		class="elevation-1"
		@update:options="fetchData"
	>
		<template v-slot:item.email="{ item }">
			<v-chip
				dark
			>
				{{ item.email }}
			</v-chip>
		</template>
	</PaginatedTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataOptions } from 'vuetify/types';

	interface User {
		[key: string]: string | number;
		first_name: string;
		last_name: string;
		email: string;
	}

	interface DataObj {
		items: User[];
		total: number;
	}

	@Component
	export default class PaginatedTableEx extends Vue {
		totalUsers = 0;

		users: User[] = [];

		loading = true;

		// Default value for options
		options = {} as DataOptions;

		headers = [
			{
				text: 'Prénom',
				sortable: true,
				value: 'first_name'
			},
			{
				text: 'Nom',
				sortable: true,
				value: 'last_name'
			},
			{
				text: 'Email',
				sortable: true,
				value: 'email'
			}
		];

		/** Fetch data when rendered */
		mounted() {
			this.fetchData();
		}

		fetchData(): void {
			this.getDataFromApi()
				.then((value) => {
					const data = value as DataObj;

					this.users = data.items;
					this.totalUsers = data.total;
				});
		}

		/**
		 * This function returns a promise
		 * After 1 second, it will return an API-like object
		 *
		 * it handles sorting and pagination
		 */
		getDataFromApi(): Promise<unknown> {
			this.loading = true;

			return new Promise((resolve) => {
				const { sortBy, sortDesc, page, itemsPerPage } = this.options;

				let items: User[] = this.getUsers();
				const total = items.length;

				// Sorting algorithm
				if (this.options.sortBy) {
					items = items.sort((a, b) => {
						const sortA = a[sortBy[0]];
						const sortB = b[sortBy[0]];

						if (sortDesc) {
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
				if (itemsPerPage > 0) {
					items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
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

		/** Users data */
		getUsers(): User[] {
			return [
				{
					first_name: 'Fenelia',
					last_name: 'Grimmert',
					email: 'fgrimmert0@facebook.com'
				},
				{
					first_name: 'Wilhelm',
					last_name: 'Downe',
					email: 'wdowne1@earthlink.net'
				},
				{
					first_name: 'Michel',
					last_name: 'Pierri',
					email: 'mpierri2@aboutads.info'
				},
				{
					first_name: 'Sherman',
					last_name: 'Westcar',
					email: 'swestcar3@eventbrite.com'
				},
				{
					first_name: 'Maggi',
					last_name: 'Barhims',
					email: 'mbarhims4@gizmodo.com'
				},
				{
					first_name: 'Aubrey',
					last_name: 'Sewart',
					email: 'asewart5@ucoz.com'
				},
				{
					first_name: 'Misha',
					last_name: 'Lennie',
					email: 'mlennie6@istockphoto.com'
				},
				{
					first_name: 'Berta',
					last_name: 'Southern',
					email: 'bsouthern7@census.gov'
				},
				{
					first_name: 'Sarette',
					last_name: 'Soitoux',
					email: 'ssoitoux8@bigcartel.com'
				},
				{
					first_name: 'Cullan',
					last_name: 'Jaggli',
					email: 'cjaggli9@spotify.com'
				},
				{
					first_name: 'Lorenzo',
					last_name: 'Clerc',
					email: 'lclerca@gizmodo.com'
				}
			];
		}
	}
</script>
