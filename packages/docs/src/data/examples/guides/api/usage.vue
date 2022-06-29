<template>
	<div>
		<VBtn
			:loading="state === StateEnum.PENDING"
			class="text-none"
			color="primary"
			@click="fetchUsers"
		>
			Récupérer les utilisateurs
		</VBtn>

		<ul class="mt-4">
			<li
				v-for="(user, index) in users"
				:key="index"
			>
				{{ user.firstname }} {{ user.lastname }}
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { getUsersFromApi } from '../../../../services/getUsers/api';
	import { User } from '../../../../services/getUsers/types';

	@Component
	export default class UserList extends Vue {
		StateEnum = StateEnum;

		state: StateEnum = StateEnum.IDLE;
		users: User[] = [];

		async fetchUsers(): Promise<void> {
			this.state = StateEnum.PENDING;

			try {
				const { data } = await getUsersFromApi();

				this.users = data.items;
				this.state = StateEnum.RESOLVED;
			} catch (error) {
				this.state = StateEnum.REJECTED;
			}
		}
	}
</script>
