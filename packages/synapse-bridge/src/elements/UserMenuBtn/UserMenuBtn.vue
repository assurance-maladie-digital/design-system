<script lang="ts">
import { defineComponent } from "vue";

import { mdiAccount, mdiLoginVariant } from '@mdi/js';

import { customizable } from '@/mixins/customizable';
import type { Refs } from '@/types';

import { config } from './config';
import { locales } from './locales';

export default defineComponent({
	mixins: [customizable(config)],
	props: {
		fullName: {
			type: String,
			required: true
		},
		additionalInformation: {
			type: String,
			default: undefined
		},
		label: {
			type: String,
			default: locales.label
		},
		hideUserIcon: {
			type: Boolean,
			default: false
		},
		hideLogoutBtn: {
			type: Boolean,
			default: false
		},
		mobileVersion: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			$refs: {} as Refs<{
				btn?: HTMLButtonElement;
			}>,
			locales,
			userIcon: mdiAccount,
			logoutIcon: mdiLoginVariant,
		};
	},
	computed: {
		btnPadding(): string {
      		return this.hideUserIcon ? 'pa-1 pa-sm-2' : this.isMobileVersion ? 'pa-0' : 'pa-1 pa-sm-3';
		},
		hasListContent(): boolean {
			return Boolean(this.$slots.default || !this.hideLogoutBtn);
		},
		isMobileVersion(): boolean {
      		return this.mobileVersion || ['xs', 'sm'].includes(this.$vuetify.display.name);
		},
		isMobileWithIcon(): boolean {
			return this.isMobileVersion && !this.hideUserIcon;
		}
	}
});
</script>

<template>
	<div class="vd-user-menu-btn-ctn d-inline-block">
		<VMenu
			v-bind="options.menu"
			:disabled="!hasListContent"
			transition="fade-transition"
			location="bottom end"
			z-index="9999"
		>
			<template #activator="{ props }">
				<VBtn
					v-bind="{
						...props,
						...options.btn
					}"
					:class="btnPadding"
					:icon="isMobileWithIcon"
					:size="isMobileWithIcon ? 'x-large' : 'default'"
					:height="isMobileWithIcon ? undefined : 'auto'"
					class="vd-user-menu-btn"
				>
					<span class="d-sr-only">
						{{ label }}
					</span>

					<span
						v-if="!isMobileVersion"
						class="d-flex flex-column align-end"
					>
						<span class="font-weight-bold">
							{{ fullName }}
						</span>

						<span class="text-grey text-darken-2 font-weight-medium">
							{{ additionalInformation }}
						</span>
					</span>

					<span
						v-if="isMobileVersion && hideUserIcon"
						class="font-weight-bold text-sm-caption"
					>
						{{ fullName }}
					</span>

					<slot name="icon">
						<VIcon
							v-if="!hideUserIcon"
							v-bind="options.icon"
							:class="isMobileVersion ? 'ml-0 pa-2' : 'ml-2 pa-2'"
							:size="isMobileWithIcon ? 'x-large' : 'default'"
							class="vd-user-icon"
						>
							{{ userIcon }}
						</VIcon>
					</slot>
				</VBtn>
			</template>

			<slot name="content">
				<VList
					v-if="hasListContent"
					v-bind="options.list"
				>
					<slot />

					<slot name="logout-item">
						<VListItem
							v-if="!hideLogoutBtn"
							v-bind="options.logoutListItem"
							class="logout"
							@click="$emit('logout')"
						>

							<div class="d-flex">
								<VIcon v-bind="options.logoutIcon" class="mr-4">
									{{ logoutIcon }}
								</VIcon>

								<VListItemTitle>
									{{ locales.logout }}
								</VListItemTitle>
							</div>
						</VListItem>
					</slot>
				</VList>
			</slot>
		</VMenu>
	</div>
</template>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';
	.vd-user-menu-btn-ctn {
		position: relative;
	}
	.vd-user-menu-btn {
		outline: none;
		&:hover:before {
			background: #000;
			opacity: 0.05;
		}
		&:focus:before {
			background: $vd-primary;
			opacity: 0.08;
		}
		&:focus {
			background: rgba($vd-primary, 0.08) !important;
		}
	}
	:deep(.vd-user-menu-btn:focus > .v-btn__overlay) {
		opacity: 0 !important;
	}
	.vd-user-icon {
		width: 40px;
		height: 40px;
		background: $vd-grey-lighten-90;
		border-radius: 50%;
		svg, .v-icon__svg {
			width: 24px;
			height: 24px;
		}
	}
</style>
