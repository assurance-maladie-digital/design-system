<template>
	<div>
		<NotificationBar
			v-show="showNotificationBar"
			:vuetify-options="vuetifyOptions"
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

	const EXAMPLE_REF = 'options-example';

	@Component({
		computed: mapState('notification', ['notification']),
		methods: mapActions('notification', ['addNotification'])
	})
	export default class NotificationBarOptions extends Vue {
		vuetifyOptions = {
			snackBar: {
				rounded: 'pill',
				top: true
			},
			icon: {
				class: 'mr-3'
			},
			btn: {
				rounded: true
			}
		};

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
