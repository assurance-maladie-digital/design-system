<template>
	<div>
		<NotificationBar :vuetify-options="vuetifyOptions" />

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

	import { mapActions } from 'vuex';

	@Component({
		methods: mapActions('notification', ['addNotification'])
	})
	export default class NotificationBarOptions extends Vue {
		vuetifyOptions = {
			snackBar: {
				rounded: 'pill'
			},
			icon: {
				class: 'mr-3'
			},
			btn: {
				rounded: true
			}
		};

		notifyUser(): void {
			this.addNotification({
				type: 'info',
				message: 'Exemple de notification.'
			});
		}
	}
</script>
