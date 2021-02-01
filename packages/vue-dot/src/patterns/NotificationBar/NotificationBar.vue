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
				@click="clearNotification"
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

	import { customizable } from '../../mixins/customizable';

	import { NotificationObj } from '../../modules/notification/types';
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
		methods: mapActions('notification', ['clearNotification']),
		watch: {
			notification(): void {
				// Compute snackbar color only when it's being displayed
				// to avoid seeing the default color on hide transition
				if (this.notification) {
					this.snackbarColor = this.options.snackBar.color as string || this.notification.type;
				}
			}
		}
	})
	export default class NotificationBar extends MixinsDeclaration {
		// We need to declare these types since there is
		// no Vuex instance when building the library
		clearNotification!: () => void;
		notification!: NotificationObj | null;

		snackbarColor: string | null = null;

		created() {
			// Remove notification if present when the
			// component is loaded the first time
			if (this.notification) {
				this.clearNotification();
			}
		}

		beforeDestroy() {
			// Clear notification on lifecycle end
			this.clearNotification();
		}
	}
</script>

<style lang="scss" scoped>
	.vd-notification-icon {
		// Use min-width to avoid shrinking with flexbox
		min-width: 24px;
	}
</style>
