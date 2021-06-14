<template>
	<div
		class="vd-header-menu"
		:class="[isOpen ? 'd-block' : 'd-none']"
	>
		<div class="d-flex column">
			<VBtn
				v-for="(item, i) in navBar.menu"
				:key="i"
				v-bind="options.homeBtn"
				@click="emitNavigationEvent"
			>
				Click
			</VBtn>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { NavBar } from '../types';

	const Props = Vue.extend({
		props: {
			isOpen: {
				type: Boolean,
				default: false
			},
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
	export default class HeaderMenu extends MixinsDeclaration {
		locales = locales;

		emitNavigationEvent() :void {
			this.$emit('navigate');
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			&-menu {
				width: 100%;
				position: fixed;
				z-index: 99;
				background-color: white;
				height: 100%;
			}
		}
	}
</style>
