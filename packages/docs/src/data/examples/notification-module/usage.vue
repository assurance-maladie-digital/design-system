<template>
	<div class="d-flex flex-wrap align-center justify-center ma-n2">
		<NotificationBar />

		<VBtn
			color="primary"
			class="ma-2"
			@click="createNotification"
		>
			Envoyer une notification
		</VBtn>

		<VBtn
			color="primary"
			outlined
			class="ma-2"
			@click="removeNotification"
		>
			Supprimer la notification
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	@Component({
		methods: mapActions('notification', ['addNotification', 'clearNotification'])
	})
	export default class NotificationBarUsage extends Vue {
		createNotification(): void {
			this.addNotification({
				type: 'info',
				message: 'Exemple de notification.'
			});
		}

		removeNotification(): void {
			this.clearNotification();
		}
	}
</script>
