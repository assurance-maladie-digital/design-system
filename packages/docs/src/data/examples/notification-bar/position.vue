<template>
	<div>
		<NotificationBar
			v-show="showNotificationBar"
			bottom
		/>

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

	const EXAMPLE_REF = 'position-example';

	@Component({
		computed: mapState('notification', ['notification']),
		methods: mapActions('notification', ['addNotification'])
	})
	export default class NotificationBarPosition extends Vue {
		get showNotificationBar(): boolean {
			return this.notification?.ref === EXAMPLE_REF;
		}

		notifyUser(): void {
			this.addNotification({
				ref: EXAMPLE_REF,
				type: 'info',
				message: 'Exemple de notification.'
			});
		}
	}
</script>
