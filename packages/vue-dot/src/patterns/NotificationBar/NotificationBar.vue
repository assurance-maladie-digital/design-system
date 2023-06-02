<template>
	<VSnackbar
		v-bind="options.snackBar"
		:value="Boolean(notification)"
		:color="snackbarColor"
		:top="!bottom"
		:bottom="bottom"
		:vertical="mobileVersion && hasLongContent"
		width="960px"
		role="status"
		class="vd-notification-bar"
	>
		<div
			v-if="notification"
			:class="contentColor + '--text'"
			class="d-flex align-center text-wrap"
		>
			<VIcon
				v-if="!mobileVersion"
				v-bind="options.icon"
				:color="contentColor"
				class="vd-notification-icon"
			>
				{{ icon }}
			</VIcon>

			{{ notification.message }}
		</div>

		<template #action="{ attrs }">
			<VDivider
				v-if="hasLongContent"
				:color="contentColor"
				:vertical="!mobileVersion"
				:class="{
					'mx-4': !mobileVersion,
					'my-4': mobileVersion && hasLongContent
				}"
				:style="{ borderColor: dividerColor }"
			/>

			<div class="vd-notification-bar-actions d-flex">
				<slot
					name="action"
					v-bind="{
						attrs: actionSlotAttrs
					}"
				/>

				<VSpacer />

				<VBtn
					v-bind="{
						...attrs,
						...options.btn
					}"
					:color="contentColor"
					:icon="smallCloseBtn"
					:class="{ 'ma-0': smallCloseBtn }"
					@click="clearNotification"
				>
					<span :class="{ 'd-sr-only': smallCloseBtn }">
						{{ closeBtnText }}
					</span>

					<VIcon
						v-if="smallCloseBtn"
						v-bind="options.closeIcon"
					>
						{{ closeIcon }}
					</VIcon>
				</VBtn>
			</div>
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
		mdiCheckCircleOutline,
		mdiAlertCircleOutline,
		mdiInformationOutline,
		mdiAlertOutline,
		mdiClose
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			closeBtnText: {
				type: String,
				default: locales.close
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
			success: mdiCheckCircleOutline,
			error: mdiAlertCircleOutline,
			info: mdiInformationOutline,
			warning: mdiAlertOutline
		};

		snackbarColor: string | null = null;

		get icon(): string | null {
			if (!this.notification) {
				return null;
			}

			return this.notification.icon || this.iconMapping[this.notification.type];
		}

		get isDarkText(): boolean {
			const isSuccess = this.notification?.type === 'success';
			const isWarning = this.notification?.type === 'warning';

			return isSuccess || isWarning;
		}

		get contentColor(): string {
			return this.isDarkText ? 'grey-darken-80' : 'white';
		}

		get dividerColor(): string {
			return this.isDarkText ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.25)';
		}

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.xs;
		}

		get isLongText(): boolean {
			return this.notification ? this.notification.message.length > 50 : false;
		}

		get hasLongContent(): boolean {
			return this.isLongText || Boolean(this.$scopedSlots.action);
		}

		get smallCloseBtn(): boolean {
			return this.mobileVersion && !this.hasLongContent;
		}

		get actionSlotAttrs(): Record<string, string | boolean> {
			return {
				color: this.contentColor,
				outlined: true,
				class: 'mr-4'
			};
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

	$breakpoint-xs: 600px;

	// Use min-width to avoid shrinking with flexbox
	.vd-notification-bar :deep() {
		.v-snack__wrapper {
			padding: 16px;
			min-width: 0;
			max-width: none;

			@media only screen and (max-width: $breakpoint-xs) {
				padding: 10px 16px;
			}
		}

		.v-snack__content,
		.v-snack__action {
			margin: 0;
			padding: 0;
		}
	}

	.vd-notification-bar.v-snack--vertical :deep() {
		.v-snack__wrapper {
			align-items: stretch;
		}

		.v-snack__action {
			align-self: stretch;
			align-items: stretch;
			flex-direction: column;
		}
	}

	.vd-notification-icon {
		min-width: 24px;
	}
</style>
