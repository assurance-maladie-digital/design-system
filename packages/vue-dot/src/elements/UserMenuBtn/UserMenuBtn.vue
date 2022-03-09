<template>
	<VMenu v-bind="options.menu">
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.btn
				}"
				:icon="$vuetify.breakpoint.xsOnly"
				class="vd-user-menu-btn"
				v-on="on"
			>
				<span class="d-none d-sm-inline-flex flex-column justify-start text-none font-weight-bold">
					{{ fullName }}
				</span>

				<span class="d-none d-sm-inline-flex flex-column justify-start text-none font-weight-bold">
					{{ additionalInformation }}
				</span>

				<slot name="icon">
					<VIcon
						v-if="!hideUserIcon"
						v-bind="options.icon"
					>
						{{ userIcon }}
					</VIcon>
				</slot>
			</VBtn>
		</template>

		<slot name="list">
			<VList v-bind="options.list">
				<slot />

				<slot name="logout-item">
					<VListItem v-if="!hideLogoutItem">
						<VListItemTitle>
							{{ locales.logout }}
						</VListItemTitle>
					</VListItem>
				</slot>
			</VList>
		</slot>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiAccountCircle } from '@mdi/js';

	import { customizable } from '../../mixins/customizable';

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
			hideUserIcon: {
				type: Boolean,
				default: false
			},
			hideLogoutItem: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class UserMenuBtn extends MixinsDeclaration {
		locales = locales;

		userIcon = mdiAccountCircle;
	}
</script>
