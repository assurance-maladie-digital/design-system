<template>
	<div>
		<NotificationBar v-show="showNotificationBar" />

		<VBtn
			color="primary"
			@click="notifyUser"
		>
			Envoyer une notification
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions, mapState } from 'vuex';

	import { NotificationTypes } from '@cnamts/vue-dot/src/modules/notification/types';

	const EXAMPLE_REF = 'type-example';

	@Component({
		computed: mapState('notification', ['notification']),
		methods: mapActions('notification', ['addNotification'])
	})
	export default class NotificationBarTypes extends Vue {
		get showNotificationBar(): boolean {
			if (!this.notification) {
				return false;
			}

			return this.notification.ref === EXAMPLE_REF;
		}

		notifyUser(): void {
			const notificationTypes: NotificationTypes[] = [
				'success',
				'error',
				'info',
				'warning'
			];

			const randomIndex = Math.floor(Math.random() * notificationTypes.length);

			this.addNotification({
				ref: EXAMPLE_REF,
				type: notificationTypes[randomIndex],
				message: 'Exemple de notification.'
			});
		}
	}
</script>
