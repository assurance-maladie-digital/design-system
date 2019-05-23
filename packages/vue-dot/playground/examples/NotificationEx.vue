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

		testNotify() {
			this.rmNotif();

			// Success notification
			const success = {
				type: 'success',
				message: 'Test notification',
				icon: 'check'
			};

			// Error notification
			const error = {
				type: 'error',
				message: 'Test notification',
				icon: 'error'
			};

			// Random between success & error
			const notification = Math.round(Math.random()) ? success: error;

			// Notify!
			this.notify(notification);
		}
	}
</script>
