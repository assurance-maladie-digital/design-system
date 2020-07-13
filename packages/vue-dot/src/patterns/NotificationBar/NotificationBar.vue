<template>
	<VSnackbar
		v-bind="options.snackBar"
		:value="Boolean(notification)"
		:color="snackbarColor"
	>
		<div
			v-if="notification"
			class="d-flex align-center"
		>
			<VIcon
				v-bind="options.icon"
				class="vd-notification-icon"
			>
				{{ notification.icon }}
			</VIcon>

			{{ notification.message }}
		</div>

		<template #action="{ attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.btn
				}"
				@click="rmNotif"
			>
				{{ closeText }}
			</VBtn>
		</template>
	</VSnackbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { mapActions, mapState } from 'vuex';
	import { NotificationObj } from '../../modules/notification';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			/** The text of the close button */
			closeText: {
				type: String,
				default: locales.close
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * NotificationBar is a component that displays
	 * a notification using a Snackbar
	 */
	@Component<NotificationBar>({
		computed: mapState('notification', ['notification']),
		methods: mapActions('notification', ['rmNotif']),
		watch: {
			notification() {
				// Compute snackbar color only when it's being displayed
				// to avoid seeing the default color on hide transition
				if (this.notification) {
					this.snackbarColor = this.options.snackBar.color as string || this.notification.type;
				}
			}
		}
	})
	export default class NotificationBar extends MixinsDeclaration {
		snackbarColor: string | null = null;

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
	.vd-notification-icon {
		// Use min-width to avoid shrinking with flexbox
		min-width: 24px;
	}
</style>
