<template>
	<div
		class="vd-header-nav d-none d-md-flex align-center"
		:class="backgroundColor"
	>
		<VBtn
			v-bind="options.homeBtn"
		>
			<VIcon>
				{{ isPro ? menuIcon : homeIcon }}
			</VIcon>
		</VBtn>
		<div class="d-flex align-center">
			{{ navBar.title }}
		</div>
		<VDivider
			v-if="isPro || !navBar.title"
			v-bind="options.divider"
		/>
		<nav
			v-if="isPro && navBar.menu"
			class="d-flex"
		>
			<!--<router-link
				v-for="(item, index) in navBar.menu"
				:key="index"
				v-bind="options.menuBtn"
				:to="item.href"
			>
				{{ item.label }}
			</router-link>-->
		</nav>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { NavBar } from '../types';

	import { mdiHomeOutline } from '@mdi/js';
	import { mdiMenu } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			navBar: {
				type: Object as PropType<NavBar>,
				default: null
			},
			isPro: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * HeaderNavBar is a component that display a navigation menu into the HeaderBar
	 */
	@Component
	export default class HeaderNavBar extends MixinsDeclaration {
		locales = locales;

		homeIcon = mdiHomeOutline;
		menuIcon = mdiMenu;

		get backgroundColor() :string {
			return this.isPro ? 'background-pro' : 'background-primary';
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header-nav {
			width: 100%;
			height: 40px;
			color: white;

			&.background {
				&-pro {
					background-color: #007FAD;
				}
				&-primary {
					background-color: #001C6B;
				}
			}
		}
	}
</style>
