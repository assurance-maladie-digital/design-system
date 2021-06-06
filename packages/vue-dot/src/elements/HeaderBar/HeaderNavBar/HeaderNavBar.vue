<template>
	<div
		class="vd-header-nav"
		:class="backgroundColor"
	>
		<VBtn
			v-bind="options.homeBtn"
		>
			<VIcon>
				{{ navBar.pro ? menuIcon : homeIcon }}
			</VIcon>
		</VBtn>
		<div class="d-flex align-center">
			{{ navBar.title }}
		</div>
		<VDivider v-bind="options.divider" />
		<nav
			v-if="!navBar.pro && navBar.menu"
			class="d-flex"
		>
			<VBtn
				v-for="(item, index) in navBar.menu"
				:key="index"
				v-bind="options.menuBtn"
			>
				{{ item.label }}
			</VBtn>
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
			return this.navBar.pro ? 'background-pro' : 'background-primary';
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header-nav {
			display: flex;
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
