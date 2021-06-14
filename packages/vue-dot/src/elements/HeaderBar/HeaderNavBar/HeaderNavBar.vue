<template>
	<div
		class="vd-header-nav align-center"
		:class="[backgroundColor, hasService ? 'd-flex': 'd-none d-md-flex']"
	>
		<div
			v-if="hasService && !reactiveDisplay"
			class="ml-4"
		>
			<div
				v-if="service.name"
				class="vd-header-service"
			>
				{{ service.name }} {{ service.name && service.baseLine ? '/' : '' }}
			</div>
			<div
				v-if="service.baseLine"
				class="vd-header-service"
			>
				{{ service.baseLine }}
			</div>
		</div>
		<div
			v-else
			class="d-flex ml-14"
		>
			<VBtn
				v-bind="options.homeBtn"
				@click="actionSelector"
			>
				<VIcon>
					{{ isPro ? menuIcon : homeIcon }}
				</VIcon>
			</VBtn>
			<div
				v-if="navBar !== null"
				class="d-flex align-center"
			>
				<div>
					{{ navBar.title }}
				</div>
				<VDivider
					v-if="!isPro"
					v-bind="options.divider"
				/>
			</div>
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
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { NavBar, ServiceItem } from '../types';

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
			},
			reactiveDisplay: {
				type: Boolean,
				default: false
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
	export default class HeaderNavBar extends MixinsDeclaration {
		locales = locales;

		homeIcon = mdiHomeOutline;
		menuIcon = mdiMenu;

		get backgroundColor() :string {
			return this.isPro ? 'background-pro' : 'background-primary';
		}

		get hasService() :boolean {
			return Boolean(this.service !== null);
		}

		actionSelector() :void {
			if(this.isPro) {
				this.openMenu();
			} else {
				this.emitNavigationEvent();
			}
		}

		emitNavigationEvent() :void {
			this.$emit('navigate');
		}

		openMenu() :void {
			// eslint-disable-next-line
			this.$emit('open-menu');
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			&-service {
				font-size: 16px;
				line-height: 18px;
			}
			&-nav {
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
	}
</style>
