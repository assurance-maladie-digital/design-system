<template>
	<PaginatedTable
		:options.sync="options"
		:headers="headers"
		:items="users"
		:server-items-length="totalUsers"
		:loading="state === STATE_ENUM.pending"
		suffix="api-example"
		@update:options="fetchData"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataOptions } from 'vuetify';

	import { User } from '../../../../services/getUsers/types';
	import { getUsersFromApi } from '../../../../services/getUsers/api';

	import { STATE_ENUM } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	@Component
	export default class PaginatedTableApi extends Vue {
		STATE_ENUM = STATE_ENUM;

		state = STATE_ENUM.idle;

		options = {} as DataOptions;
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

		users: User[] = [];
		totalUsers = 0;

		mounted() {
			this.fetchData();
		}

		async fetchData(): Promise<void> {
			this.state = STATE_ENUM.pending;

			try {
				const res = await getUsersFromApi(this.options);
				const { items, total } = res.data;

				this.users = items;
				this.totalUsers = total;

				this.state = STATE_ENUM.resolved;
			} catch(err) {
				this.state = STATE_ENUM.rejected;
			}
		}
	}
</script>
