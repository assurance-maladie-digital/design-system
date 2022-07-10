<template>
	<PaginatedTable
		:options.sync="options"
		:headers="headers"
		:items="users"
		:server-items-length="totalUsers"
		:loading="state === StateEnum.PENDING"
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

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	@Component
	export default class PaginatedTableApi extends Vue {
		StateEnum = StateEnum;

		state = StateEnum.IDLE;

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

		async fetchData(): Promise<void> {
			this.state = StateEnum.PENDING;

			try {
				const res = await getUsersFromApi(this.options);
				const { items, total } = res.data;

				this.users = items;
				this.totalUsers = total;

				this.state = StateEnum.RESOLVED;
			} catch(err) {
				this.state = StateEnum.REJECTED;
			}
		}
	}
</script>
