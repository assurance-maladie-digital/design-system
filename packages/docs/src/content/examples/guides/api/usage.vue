<template>
	<div>
		<VBtn
			:loading="state === 'pending'"
			class="text-none"
			color="primary"
			@click="onClick"
		>
			Récupérer les utilisateurs
		</VBtn>

		<ul
			v-if="users.length > 0"
			class="mt-4"
		>
			<li
				v-for="(user, index) in users"
				:key="`user-${index}`"
			>
				{{ user.firstname }} {{ user.lastname }}
			</li>
		</ul>

		<p v-else-if="state === 'resolved'">
			Pas d’utilisateur
		</p>
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
		state: StateEnum = StateEnum.IDLE;
		users: User[] = [];

		async onClick(): Promise<void> {
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
