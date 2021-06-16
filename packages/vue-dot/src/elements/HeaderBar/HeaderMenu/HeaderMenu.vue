<template>
	<div
		class="vd-header-menu"
		:class="[isOpen ? 'd-block' : 'd-none']"
	>
		<div
			class="vd-header-menu-container"
			:class="responsiveMenu"
		>
			<div class="vd-header-menu-title d-flex align-center">
				<h4	class="ml-3">
					{{ hasService ? service.name : locales.menu }}
				</h4>
				<VBtn
					v-bind="options.closeBtn"
					@click="openMenu"
				>
					<VIcon>
						{{ closeMenuIcon }}
					</VIcon>
				</VBtn>
			</div>
			<div class="d-flex column">
				<ul>
					<li
						v-for="(item, i) in navBar.menu"
						:key="i"
						v-bind="options.homeBtn"
					>
						Click
					</li>
				</ul>
			</div>
		</div>
		<div
			class="vd-header-menu-click-capture d-none d-sm-block"
			@click="openMenu"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { NavBar, ServiceItem } from '../types';

	import { mdiChevronLeft } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			isOpen: {
				type: Boolean,
				default: false
			},
			navBar: {
				type: Object as PropType<NavBar>,
				default: null
			},
			service: {
				type: Object as PropType<ServiceItem>,
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

		closeMenuIcon = mdiChevronLeft;

		get hasService() :boolean {
			return Boolean(this.service !== null);
		}

		get responsiveMenu() :string {
			return this.$vuetify.breakpoint.name === 'xs' ? 'mobile' : '';
		}

		openMenu() :void {
			this.$emit('open-menu', false);
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			&-menu {
				position: fixed;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				z-index: 99;

				&-click-capture {
					position: fixed;
					top: 0;
					left: 305px;
					bottom: 0;
					right: 0;
				}

				&-container {
					width: 305px;
					position: fixed;
					top: 0;
					left: 0;
					bottom: 0;
					background-color: #007FAD;
					height: 100%;

					&.mobile {
						width: 100%;
					}
				}

				&-title {
					color: white;
					text-transform: uppercase;
					justify-content: space-between;
					height: 55px;
					border-bottom: white 2px solid;
				}
			}
		}
	}
</style>
