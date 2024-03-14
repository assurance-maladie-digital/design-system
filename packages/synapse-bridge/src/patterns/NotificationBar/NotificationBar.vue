<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import { mdiClose, mdiCheckCircleOutline, mdiAlertCircleOutline, mdiInformationOutline, mdiAlertOctagonOutline } from "@mdi/js";
import { config } from "./config";
import { locales } from "./locales";
import { customizable } from "@/mixins/customizable";
import { IndexedObject } from "@/types";

export default defineComponent({
	mixins: [customizable(config)],
	props: {
		closeBtnText: {
			type: String,
			default: locales.close,
		},
		bottom: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			closeIcon: mdiClose,
			snackbarColor: "",
			snackbar: false,
			iconMapping: {
				info: mdiInformationOutline,
				success: mdiCheckCircleOutline,
				warning: mdiAlertCircleOutline,
				error: mdiAlertOctagonOutline,
			} as IndexedObject<string>,
		};
	},
	computed: {
		...mapGetters('notification', {
			notification: 'notification',
		}),
		icon(): string | null {
			if (!this.notification) {
				return null;
			}
			return this.notification.icon || this.iconMapping[this.notification.type];
		},
		isDarkText(): boolean {
			return (this.notification?.type === 'success' || this.notification?.type === 'warning');
		},
		contentColor(): string {
			return this.isDarkText ? "grey-darken-80" : "white";
		},
		dividerColor(): string {
			return this.isDarkText ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)";
		},
		mobileVersion(): boolean {
			return this.$vuetify.display.name === "xs";
		},
		isLongText(): boolean {
			return this.notification ? this.notification.message.length > 50 : false;
		},
		hasLongContent(): boolean {
			return this.isLongText || Boolean(this.$slots.action);
		},
		smallCloseBtn(): boolean {
			return this.mobileVersion && !this.hasLongContent;
		},
		actionSlotAttrs(): Record<string, string | boolean> {
			return {
				color: this.contentColor,
				variant: "outlined",
				class: 'mr-4'
			};
		}
	},
	watch: {
		notification() : void {
			if (this.notification) {
				this.snackbar = true;
				this.snackbarColor = this.options.snackBar.color || this.notification.type;
			} else {
				this.snackbar = false;
			}
		},
	},
	methods: {
		...mapActions('notification', {
			dispatchClearNotification: 'clearNotification',
		}),
		clearNotification() {
			this.dispatchClearNotification();
		},
	},
	created() {
		if (this.notification) {
			this.clearNotification();
		}
	},
	beforeUnmount() {
		this.clearNotification();
	},
});
</script>

<template>
	<VSnackbar
		v-bind="options.snackBar"
		:modelValue="snackbar"
		:color="snackbarColor"
		:vertical="mobileVersion && hasLongContent"
		:multi-line="hasLongContent"
		:width="mobileVersion ? 'auto' : '960px'"
		role="status"
		:location="bottom ? 'bottom' : 'top'"
		class="vd-notification-bar"
	>
		<div
			:class="'text-' + contentColor"
			class="vd-notification-content"
		>
			<VIcon
				v-if="!mobileVersion"
				v-bind="options.icon"
				:color="contentColor"
				class="vd-notification-icon"
			>
				{{ icon }}
			</VIcon>

			{{ notification?.message }}

			<VSpacer />

			<VDivider
				v-if="mobileVersion && hasLongContent"
				:color="contentColor"
				:style="{ borderColor: dividerColor }"
				class="w-100 my-3"
			/>

			<div class="d-flex flex-row justify-space-between">
				<VDivider
					v-if="!mobileVersion && hasLongContent"
					:color="contentColor"
					:style="{ borderColor: dividerColor }"
					class="mx-4"
					:vertical="true"
				/>
				<slot
					name="action"
					:attrs="actionSlotAttrs"
				>
				</slot>
				<slot
					name="default"
				/>
				<VBtn
					v-bind="{
						...options.btn,
					}"
					:color="contentColor"
					:icon="smallCloseBtn"
					:class="{ 'ma-0': smallCloseBtn }"
					class="ml-4"
					@click="clearNotification"
				>
					<span :class="{ 'd-sr-only': smallCloseBtn }">
						{{ closeBtnText }}
					</span>

					<VIcon v-if="smallCloseBtn" v-bind="options.closeIcon">
						{{ closeIcon }}
					</VIcon>
				</VBtn>
			</div>
		</div>
	</VSnackbar>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

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

	.vd-notification-content {
		display: flex;
		align-items: center;
	}
}

.vd-notification-bar.v-snackbar--vertical :deep() {
	.v-snack__wrapper {
		align-items: stretch;
		flex-direction: row;
	}

	.v-snack__action {
		align-self: stretch;
		align-items: stretch;
		flex-direction: column;
	}

	.v-snackbar__content {
		margin: 0;
		width: 100%;
	}

	.vd-notification-content {
		flex-direction: column;
	}
}

.vd-notification-icon {
	min-width: 24px;
}
</style>
