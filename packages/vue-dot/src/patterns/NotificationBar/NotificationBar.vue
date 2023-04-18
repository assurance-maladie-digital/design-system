<template>
	<VSnackbar
		v-bind="options.snackBar"
		:value="Boolean(notification)"
		:color="snackbarColor"
		role="status"
		class="vd-notification-bar"
		:class="textColor + '--text'"
		:vertical="mobileVersion"
	>
		<div
			v-if="notification"
			class="d-flex align-center"
		>
			<VIcon
				v-bind="options.icon"
				:color="textColor"
				class="vd-notification-icon"
			>
				{{ icon }}
			</VIcon>

			{{ notification.message }}

			<svg
				v-if="divider && !mobileVersion"
				width="1"
				height="36"
				role="img"
				focusable="false"
				aria-hidden="true"
				class="ml-3"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1 36"
			>
				<path
					:stroke="textColor"
					d="M.5 36V0"
				/>
			</svg>
		</div>

		<template #action="{ attrs }">
			<VDivider
				v-if="divider && mobileVersion"
				:color="textColor"
			/>
			<slot name="actions">
				<VBtn
					v-bind="{
						...attrs,
						...options.btn
					}"
					:color="textColor"
					:icon="mobileVersion"
					:x-large="mobileVersion"
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
			</slot>
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
			divider: {
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
	$beakpoint-xs: 600px;

	// Use min-width to avoid shrinking with flexbox
	.vd-notification-bar :deep(.v-snack__wrapper) {
		min-width: 0;
		color: currentColor;
	}

	.vd-notification-bar :deep(.v-snack__action) {
		position: relative;
		@media (max-width: $beakpoint-xs) {
			margin: 0;
			padding: 14px 16px;
		}
	}

	.vd-notification-icon {
		min-width: 24px;
	}

	.v-divider {
		position: absolute;
		top: 0;
		left: 0;
		margin-left: 16px;
		margin-right: 16px;
		width: calc(100% - 32px);
	}
</style>
