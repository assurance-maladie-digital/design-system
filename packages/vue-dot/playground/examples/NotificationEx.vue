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

	import { NotificationObj } from '../../src/modules/notification';

	import {
		mdiCheck,
		mdiAlertCircle,
		mdiInformation,
		mdiAlert
	} from '@mdi/js';

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class NotificationEx extends Vue {
		// Vuex bindings type declaration
		notify!: (obj: NotificationObj) => void;
		rmNotif!: () => void;

		notifications = [
			{
				type: 'success',
				message: 'Test notification',
				icon: mdiCheck
			},
			{
				type: 'error',
				message: 'Test notification',
				icon: mdiAlertCircle
			},
			{
				type: 'info',
				message: 'Test notification',
				icon: mdiInformation
			},
			{
				type: 'warning',
				message: 'Test notification',
				icon: mdiAlert
			}
		];

		testNotify(): void {
			this.rmNotif();

			const randomIndex = Math.floor(Math.random() * this.notifications.length);
			const notification = this.notifications[randomIndex];

			// Notify!
			this.notify(notification);
		}
	}
</script>
