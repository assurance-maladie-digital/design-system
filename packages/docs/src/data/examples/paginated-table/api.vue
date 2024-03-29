<template>
	<PaginatedTable
		:headers="headers"
		:items="users"
		:options.sync="options"
		:server-items-length="totalUsers"
		:loading="state === StateEnum.PENDING"
		suffix="api-example"
		@update:options="fetchData"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { DataOptions } from 'vuetify/types';

	interface User {
		[key: string]: string;
		firstname: string;
		lastname: string;
		email: string;
	}

	interface DataObj {
		items: User[];
		total: number;
	}

	@Component
	export default class PaginatedTableApi extends Vue {
		StateEnum = StateEnum;

		totalUsers = 0;
		users: User[] = [];
		options = {} as DataOptions;

		state = StateEnum.IDLE;

		headers = [
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

		async fetchData(): Promise<void> {
			const { items, total } = await this.getDataFromApi(this.options);

			this.users = items;
			this.totalUsers = total;
		}

		async wait(ms: number) {
			return new Promise(resolve => {
				setTimeout(resolve, ms);
			});
		}

		/**
		 * This function returns a promise
		 * After 1 second, it will return an API-like object
		 *
		 * It handles sorting and pagination
		 */
		async getDataFromApi({ sortBy, sortDesc, page, itemsPerPage }: DataOptions): Promise<DataObj> {
			this.state = StateEnum.PENDING;

			await this.wait(1000);

			return new Promise((resolve) => {
				let items: User[] = this.getUsers();
				const total = items.length;

				// Sorting algorithm
				if (sortBy) {
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

				resolve({
					items,
					total
				});

				this.state = StateEnum.RESOLVED;
			});
		}

		getUsers(): User[] {
			return [
				{
					firstname: 'Virginie',
					lastname: 'Beauchesne',
					email: 'virginie.beauchesne@example.com'
				},
				{
					firstname: 'Simone',
					lastname: 'Bellefeuille',
					email: 'simone.bellefeuille@example.com'
				},
				{
					firstname: 'Étienne',
					lastname: 'Salois',
					email: 'etienne.salois@example.com'
				},
				{
					firstname: 'Bernadette',
					lastname: 'Langelier',
					email: 'bernadette.langelier@example.com'
				},
				{
					firstname: 'Agate',
					lastname: 'Roy',
					email: 'agate.roy@example.com'
				},
				{
					firstname: 'Louis',
					lastname: 'Denis',
					email: 'louis.denis@example.com'
				},
				{
					firstname: 'Édith',
					lastname: 'Cartier',
					email: 'edith.cartier@example.com'
				},
				{
					firstname: 'Alphonse',
					lastname: 'Bouvier',
					email: 'alphonse.bouvier@example.com'
				},
				{
					firstname: 'Eustache',
					lastname: 'Dubois',
					email: 'eustache.dubois@example.com'
				},
				{
					firstname: 'Rosemarie',
					lastname: 'Quessy',
					email: 'rosemarie.quessy@example.com'
				},
				{
					firstname: 'Serge',
					lastname: 'Rivard',
					email: 'serge.rivard@example.com'
				},
				{
					firstname: 'Jacques',
					lastname: 'Demers',
					email: 'jacques.demers@example.com'
				},
				{
					firstname: 'Aimée',
					lastname: 'Josseaume',
					email: 'aimee.josseaume@example.com'
				},
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
	}
</script>
