<template>
	<VBtn
		v-bind="{
			...options.btn,
			...$attrs
		}"
		:aria-label="menuBtnActionLabel"
		:class="spacing"
		class="vd-header-menu-btn"
		v-on="$listeners"
	>
		<VIcon v-bind="options.icon">
			{{ menuIcon }}
		</VIcon>

		{{ locales.menu }}
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiMenu } from '@mdi/js';

	import { locales } from './locales';
	import { config } from './config';

	import { customizable } from '../../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			drawer: {
				type: Boolean,
				default: false
			},
			spacing: {
				type: String,
				default: 'px-2 mx-n2'
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class HeaderMenuBtn extends MixinsDeclaration {
		locales = locales;

		menuIcon = mdiMenu;

		get menuBtnActionLabel(): string {
			const action = this.drawer ? locales.close : locales.open;

			return locales.menuBtnLabel(action);
		}
	}
</script>
