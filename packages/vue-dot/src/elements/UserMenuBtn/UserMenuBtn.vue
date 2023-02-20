<template>
	<div class="vd-user-menu-btn-ctn d-inline-block">
		<VMenu
			v-bind="options.menu"
			attach
			content-class="vd-user-menu-content"
		>
			<template #activator="{ on, attrs }">
				<VBtn
					v-bind="{
						...attrs,
						...options.btn
					}"
					:class="btnPadding"
					class="vd-user-menu-btn text-none"
					v-on="on"
				>
					<span class="d-sr-only">
						{{ label }}
					</span>

					<span class="d-flex flex-column align-end">
						<span class="font-weight-bold">
							{{ fullName }}
						</span>

						<span class="grey--text text--darken-2">
							{{ additionalInformation }}
						</span>
					</span>

					<slot name="icon">
						<VIcon
							v-if="!hideUserIcon"
							v-bind="options.icon"
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
					role="list"
				>
					<slot />

					<slot name="logout-item">
						<VListItem
							v-if="!hideLogoutBtn"
							v-bind="options.logoutListItem"
							@click="$emit('logout')"
						>
							<VIcon v-bind="options.logoutIcon">
								{{ logoutIcon }}
							</VIcon>

							<VListItemTitle>
								{{ locales.logout }}
							</VListItemTitle>
						</VListItem>
					</slot>
				</VList>
			</slot>
		</VMenu>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiAccount, mdiLoginVariant } from '@mdi/js';

	import { customizable } from '../../mixins/customizable';
	import { Refs } from '../../types';

	import { config } from './config';
	import { locales } from './locales';

	const Props = Vue.extend({
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
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class UserMenuBtn extends MixinsDeclaration {
		$refs!: Refs<{
			btn?: Vue;
		}>;

		locales = locales;

		userIcon = mdiAccount;
		logoutIcon = mdiLoginVariant;

		get btnPadding(): string {
			return this.hideUserIcon ? 'pa-1 pa-sm-2' : 'pa-1 pa-sm-3';
		}

		get hasListContent(): boolean {
			return Boolean(this.$slots.default || !this.hideLogoutBtn);
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-user-menu-btn-ctn {
		position: relative;
	}

	.vd-user-menu-btn {
		&:hover::before {
			background: #000;
			opacity: .05;
		}

		&:focus::before {
			background: $vd-primary;
			opacity: .08;
		}
	}

	.vd-user-menu-content {
		right: 0 !important;
		left: auto !important;
		top: 100% !important;
	}

	.vd-user-icon {
		width: 40px;
		height: 40px;
		background: $vd-grey-lighten-90;
		border-radius: 50%;
	}
</style>
