<template>
	<div
		class="vd-header-nav align-center"
		:class="[backgroundColor, serviceClasses]"
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
			class="d-flex align-center ml-14"
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
				class="vd-header-title d-flex align-center"
			>
				<div>
					{{ navBar.title }}
				</div>
			</div>
			<VTabs
				v-if="!isPro && navBar.menu"
				v-bind="options.navTabs"
			>
				<VTab
					v-for="(item, index) in navBar.menu"
					:key="index"
					:to="item.href"
				>
					{{ item.label }}
				</VTab>
			</VTabs>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';

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
		homeIcon = mdiHomeOutline;
		menuIcon = mdiMenu;

		get backgroundColor() :string {
			return this.isPro ? 'background-pro' : 'background-primary';
		}

		get hasService() :boolean {
			return Boolean(this.service !== null);
		}

		get serviceClasses() :string {
			return this.hasService ? 'd-flex': 'd-none d-md-flex';
		}

		actionSelector() :void {
			if(this.isPro) {
				this.openMenu();
			} else {
				this.$router.push('/');
			}
		}

		openMenu() :void {
			this.$emit('open-menu', true);
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			&-title {
				width: 200px;
			}

			&-service {
				font-size: 16px;
				line-height: 18px;
			}

			&-nav {
				width: 100%;
				height: 48px;
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
