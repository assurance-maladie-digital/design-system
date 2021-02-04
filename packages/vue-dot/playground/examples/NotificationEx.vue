<template>
	<DocSection title="Notification system">
		<VBtn
			color="accent"
			@click="testNotify"
		>
			Send Notification
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	import { NotificationObj } from '../../src/modules/notification/types';

	import {
		mdiCheck,
		mdiAlertCircle,
		mdiInformation,
		mdiAlert
	} from '@mdi/js';

	const notificationMessage = 'Test notification';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'addNotification',
			'clearNotification'
		])
	})
	export default class NotificationEx extends Vue {
		// Vuex bindings type declaration
		addNotification!: (obj: NotificationObj) => void;
		clearNotification!: () => void;

		notifications: NotificationObj[] = [
			{
				type: 'success',
				message: notificationMessage,
				icon: mdiCheck
			},
			{
				type: 'error',
				message: notificationMessage,
				icon: mdiAlertCircle
			},
			{
				type: 'info',
				message: notificationMessage,
				icon: mdiInformation
			},
			{
				type: 'warning',
				message: notificationMessage,
				icon: mdiAlert
			}
		];

		testNotify(): void {
			this.clearNotification();

			const randomIndex = Math.floor(Math.random() * this.notifications.length);
			const notification = this.notifications[randomIndex];

			// Notify!
			this.addNotification(notification);
		}
	}
</script>
