<template>
	<VSnackbar
		v-if="notification"
		v-bind="options.snackBar"
		:color="options.snackBar.color || notification.type"
	>
		<VLayout align-center>
			<VIcon v-bind="options.icon">
				{{ notification.icon }}
			</VIcon>

			{{ notification.message }}
		</VLayout>

		<VBtn
			v-bind="options.btn"
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
	import { NotificationObj } from '../modules/notification';

	import customizable from '../mixins/customizable';

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
		]),
		mixins: [
			customizable({
				snackBar: {
					value: true,
					timeout: 0,
					top: true
				},
				icon: {
					color: 'white',
					class: 'mr-2'
				},
				btn: {
					color: 'white',
					flat: true
				}
			})
		]
	})
	export default class NotificationBar extends Props {
		// Vuex bindings type declaration
		notification?: NotificationObj;
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
