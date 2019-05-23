<template>
	<VSnackbar
		v-if="notification"
		:value="true"
		:timeout="0"
		:color="notification.type"
		top
	>
		<VLayout align-center>
			<VIcon
				color="white"
				class="mr-2"
			>
				{{ notification.icon }}
			</VIcon>

			{{ notification.message }}
		</VLayout>

		<VBtn
			color="white"
			flat
			@click="rmNotif"
		>
			{{ closeText }}
		</VBtn>
	</VSnackbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions, mapState } from 'vuex';

	const Props = Vue.extend({
		props: {
			closeText: {
				type: String,
				default: 'Fermer'
			}
		}
	});

	@Component({
		// Vuex bindings
		computed: mapState('notification', [
			'notification'
		]),
		methods: mapActions('notification', [
			'rmNotif'
		])
	})
	export default class NotificationBar extends Props {
		// Vuex bindings type declaration
		notification!: object;
		rmNotif!: () => void;

		created() {
			// Remove notification if present when the
			// component is loaded the first time
			if (this.notification) {
				this.rmNotif();
			}
		}

		beforeDestroy() {
			// Clear notification on end lifecycle
			this.rmNotif();
		}
	}
</script>
