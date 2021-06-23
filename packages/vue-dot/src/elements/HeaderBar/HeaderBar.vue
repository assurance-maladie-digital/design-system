<template>
	<VSheet
		:height="headerBarHeight"
		class="vd-header-bar"
		tag="header"
	>
		<VSheet	v-bind="options.headerContainer">
			<HeaderMenu
				:nav-bar="navBar"
				:service="service"
			/>

			<div class="d-flex align-center">
				<div class="d-flex justify-center">
					<img
						:src="headerLogo"
						alt=""
					>
				</div>

				<slot name="company-logo">
					<div
						v-if="hasService"
						class="vd-header-bar-title d-none d-md-flex"
					>
						<VDivider
							v-bind="options.divider"
						/>

						<div class="d-flex flex-column">
							<div
								v-if="service.name"
								class="vd-header-bar-title-main"
							>
								{{ service.name }}
							</div>

							<div
								v-if="service.baseLine"
								class="vd-header-bar-title-sub"
							>
								{{ service.baseLine }}
							</div>
						</div>
					</div>
				</slot>
			</div>

			<div
				v-if="hasUserSlot"
				class="d-flex align-center"
			>
				<slot name="user-bar" />
			</div>
		</VSheet>

		<HeaderNavBar
			v-if="(hasNavBar && isDesktop) || hasService"
			:is-pro="hasProTemplate"
			:nav-bar="navBar"
			:is-desktop="isDesktop"
			:service="service"
		/>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';

	import { customizable } from '../../mixins/customizable';

	import HeaderMenu from './HeaderMenu';
	import HeaderNavBar from './HeaderNavBar';

	import { NavBar, ServiceItem } from './types';

	import { mdiMenu } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			navBar: {
				type: Object as PropType<NavBar>,
				default: null
			},
			service: {
				type: Object as PropType<ServiceItem>,
				default: null
			},
			type: {
				type: String,
				required: true,
				validator(value: string): boolean {
					const isValid = value.match(/^(ameli-pro|risque-pro|cnam)$/) !== null;
					if (!isValid) {
						// eslint-disable-next-line no-console
						console.error(`Wrong value for the \`type\` prop. 
						Given: "${value}", expected "(ameli-pro|risque-pro|cnam)".`);
					}
					return true;
				}
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * HeaderBar is a component that can be used as the app main header
	 * it contains the HeaderNavBar component
	 */
	@Component({
		components: {
			HeaderMenu,
			HeaderNavBar
		}
	})
	export default class HeaderBar extends MixinsDeclaration {
		menuIcon = mdiMenu;

		isOpen = false;

		get hasLogoSlot(): boolean {
			return Boolean(this.$slots['company-logo']);
		}

		get hasUserSlot(): boolean {
			return Boolean(this.$slots['user-bar']);
		}

		get hasNavBar(): boolean {
			return Boolean(this.navBar !== null);
		}

		get hasService(): boolean {
			return Boolean(this.service !== null);
		}

		get hasProTemplate(): boolean {
			return Boolean(this.type === 'ameli-pro' && !this.hasService && !this.hasLogoSlot);
		}

		get headerLogo(): string | null {
			let img :string;

			if(this.hasLogoSlot || this.hasService) {
				img = 'cnam-no-text';
			} else if(this.type === 'cnam') {
				img = 'cnam';
			} else if(this.type === 'ameli-pro') {
				img = 'ameli-pro';
			} else if(this.type === 'risque-pro') {
				img = 'risque-pro';
			} else {
				img = 'cnam';
			}

			return require(`../../assets/logos/${img}.svg`);
		}

		get headerBarHeight(): number {
			return (this.hasNavBar && this.isDesktop) || this.hasService ? 168 : 120;
		}

		get isDesktop(): boolean {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return false;
				case 'sm': return false;
				case 'md': return true;
				case 'lg': return true;
				case 'xl': return true;
			}
			return false;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar {
		width: 100%;
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
					0px 2px 2px rgba(0, 0, 0, 0.14),
					0px 1px 5px rgba(0, 0, 0, 0.12);

		&-title {
			color: #0c419a;

			&-main {
				font-size: 16px;
				line-height: 18px;
			}

			&-sub {
				font-size: 12px;
				line-height: 14px;
			}
		}
	}
</style>
