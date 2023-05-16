<template>
	<VSnackbar
		v-bind="options.snackBar"
		:value="Boolean(notification)"
		:color="snackbarColor"
		:top="top && !bottom"
		:bottom="bottom && !top"
		:class="textColor + '--text'"
		role="status"
		class="vd-notification-bar"
	>
		<div
			v-if="notification"
			class="d-flex align-center"
		>
			<VIcon
				v-if="!mobileVersion"
				v-bind="options.icon"
				:color="textColor"
				class="vd-notification-icon"
			>
				{{ icon }}
			</VIcon>

			{{ notification.message }}
		</div>

		<template #action="{ attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.btn
				}"
				:color="textColor"
				:icon="mobileVersion"
				@click="clearNotification"
			>
				<span :class="{ 'd-sr-only': mobileVersion }">
					{{ closeBtnText }}
				</span>

				<VIcon
					v-if="mobileVersion"
					v-bind="options.closeIcon"
				>
					{{ closeIcon }}
				</VIcon>
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

	import { IndexedObject } from '../../types';
	import { NotificationObj } from '../../modules/notification/types';

	import {
		mdiCheck,
		mdiAlertCircle,
		mdiInformation,
		mdiAlert,
		mdiClose
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			closeBtnText: {
				type: String,
				default: locales.close
			},
			top: {
				type: Boolean,
				default: true
			},
			bottom: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

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
		closeIcon = mdiClose;

		// We need to declare these types since there is
		// no Vuex instance when building the library
		clearNotification!: () => void;
		notification!: NotificationObj | null;

		iconMapping: IndexedObject = {
			success: mdiCheck,
			error: mdiAlertCircle,
			info: mdiInformation,
			warning: mdiAlert
		};

		snackbarColor: string | null = null;

		get icon(): string | null {
			if (!this.notification) {
				return null;
			}

			return this.notification.icon || this.iconMapping[this.notification.type];
		}

		get textColor(): string {
			const isSuccess = this.notification?.type === 'success';
			const isWarning = this.notification?.type === 'warning';

			if (isSuccess || isWarning) {
				return 'grey-darken-80';
			}

			return 'white';
		}

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.xs;
		}

		created() {
			if (this.notification) {
				this.clearNotification();
			}
		}

		beforeDestroy() {
			this.clearNotification();
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	// Use min-width to avoid shrinking with flexbox
	.vd-notification-bar :deep(.v-snack__wrapper) {
		min-width: 0;
		color: currentColor;
	}

	.vd-notification-icon {
		min-width: 24px;
	}
</style>
