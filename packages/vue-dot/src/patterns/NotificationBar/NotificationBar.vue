<template>
	<VSnackbar
		v-if="notification"
		v-bind="options.snackBar"
		:color="options.snackBar.color || notification.type"
	>
		<!--
			Notification body

			align-center will make sure that the content
			is always vertically centered (two lines, etc)
		-->
		<VLayout align-center>
			<VIcon
				v-bind="options.icon"
				class="vd-notification-icon"
			>
				{{ notification.icon }}
			</VIcon>

			{{ notification.message }}
		</VLayout>

		<!-- Close button -->
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

	import config from './config';

	import { mapActions, mapState } from 'vuex';
	import { NotificationObj } from '../../modules/notification';

	import customizable, { Options } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			/** The text of the close button */
			closeText: {
				type: String,
				default: 'Fermer'
			}
		}
	});

	/**
	 * NavigationBar is a component that displays a notification using a Snackbar
	 */
	@Component({
		// Vuex bindings
		computed: mapState('notification', [
			'notification'
		]),
		methods: mapActions('notification', [
			'rmNotif'
		]),
		mixins: [
			// Default configuration
			customizable(config)
		]
	})
	export default class NotificationBar extends Props {
		// Mixin computed data
		options!: Options;

		// Vuex bindings type declaration
		notification!: NotificationObj;
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

<style lang="scss" scoped>
	$size: 24px;

	// Fix size of the icon to avoid reflow at first render
	.vd-notification-icon {
		width: $size;
		height: $size;
	}
</style>
