<template>
	<DocSection title="Notification system">
		<VBtn
			color="primary"
			class="ma-0"
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

	@Component({
		// Vuex bindings
		methods: mapActions('notification', [
			'notify',
			'rmNotif'
		])
	})
	export default class NotificationEx extends Vue {
		// Vuex bindings type declaration
		notify!: (obj: object) => void;
		rmNotif!: () => void;

		notifications = [
			{
				type: 'success',
				message: 'Test notification',
				icon: 'check'
			},
			{
				type: 'error',
				message: 'Test notification',
				icon: 'error'
			},
			{
				type: 'info',
				message: 'Test notification',
				icon: 'info'
			},
			{
				type: 'warning',
				message: 'Test notification',
				icon: 'warning'
			}
		];

		testNotify() {
			this.rmNotif();

			const notification = this.notifications[Math.floor(Math.random() * this.notifications.length)];

			// Notify!
			this.notify(notification);
		}
	}
</script>
