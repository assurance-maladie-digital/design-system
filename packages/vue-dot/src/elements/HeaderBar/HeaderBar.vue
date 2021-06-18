<template>
	<div
		class="vd-header"
		:class="headerBarHeight"
	>
		<div class="vd-header-container">
			<div class="d-flex align-center d-md-none">
				<VBtn
					v-bind="options.homeBtn"
					@click="openMenu(true)"
				>
					<VIcon>
						{{ menuIcon }}
					</VIcon>
				</VBtn>
			</div>
			<div class="d-flex align-center">
				<div class="vd-header-logo">
					<img
						:src="headerLogo"
						alt=""
					>
				</div>
				<slot name="company-logo">
					<div
						v-if="hasService"
						class="vd-header-title d-none d-md-flex"
					>
						<VDivider
							v-bind="options.divider"
						/>
						<div class="d-flex flex-column">
							<div
								v-if="service.name"
								class="vd-header-title-main"
							>
								{{ service.name }}
							</div>
							<div
								v-if="service.baseLine"
								class="vd-header-title-sub"
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
		</div>
		<HeaderNavBar
			v-if="(hasNavBar && responsiveHeight) || hasService"
			:is-pro="hasProTemplate"
			:nav-bar="navBar"
			:reactive-display="responsiveHeight"
			:service="service"
			@open-menu="openMenu"
		/>
		<HeaderMenu
			:is-open="isOpen"
			:nav-bar="navBar"
			:service="service"
			@open-menu="openMenu"
		/>
	</div>
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
						console.error(`Wrong value for the \`type\` prop. Given: "${value}", expected "(ameli-pro|risque-pro|cnam)".`);
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

		get hasLogoSlot() :boolean {
			return Boolean(this.$slots['company-logo']);
		}

		get hasUserSlot() :boolean {
			return Boolean(this.$slots['user-bar']);
		}

		get hasNavBar() :boolean {
			return Boolean(this.navBar !== null);
		}

		get hasService() :boolean {
			return Boolean(this.service !== null);
		}

		get hasProTemplate() :boolean {
			return Boolean(this.type === 'ameli-pro' && !this.hasService && !this.hasLogoSlot);
		}

		get headerLogo() :string | null {
			if(this.hasLogoSlot || this.hasService) {
				return require('../../assets/svg/logo-no-text.svg');
			} else if(this.type === 'cnam') {
				return require('../../assets/svg/logo.svg');
			} else if(this.type === 'ameli-pro') {
				return require('../../assets/svg/ameli-pro.svg');
			} else if(this.type === 'risque-pro') {
				return require('../../assets/svg/risque-pro.svg');
			}

			return null;
		}

		get headerBarHeight() :string {
			return (this.hasNavBar && this.responsiveHeight) || this.hasService ? 'long' : 'short';
		}

		get responsiveHeight() :boolean {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return false;
				case 'sm': return false;
				case 'md': return true;
				case 'lg': return true;
				case 'xl': return true;
			}
			return false;
		}

		openMenu(value: boolean) :void {
			this.isOpen = value;
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-header {
			width: 100%;
			box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
						0px 2px 2px rgba(0, 0, 0, 0.14),
						0px 1px 5px rgba(0, 0, 0, 0.12);

			&-container {
				display: flex;
				height: 120px;
				justify-content: space-between;
			}

			&.short {
				height: 120px;
			}

			&.long {
				height: 168px;
			}

			&-logo {
				display: flex;
				justify-content: center;
			}

			&-title {
				color: #0C419A;

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
	}
</style>
