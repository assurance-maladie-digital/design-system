<template>
	<div
		class="vd-header"
		:class="headerBarHeight"
	>
		<div class="vd-header-container">
			<div class="d-flex align-center d-md-none">
				<VBtn
					v-bind="options.homeBtn"
					@click="openMenu"
				>
					<VIcon>
						{{ menuIcon }}
					</VIcon>
				</VBtn>
			</div>
			<div class="d-flex align-center">
				<div class="vd-header-logo">
					<img
						v-if="hasLogoSlot || hasService"
						src="../../assets/images/simple-logo.png"
						alt=""
					>
					<img
						v-else-if="type === 'cnam'"
						src="../../assets/images/logo.png"
						alt=""
					>
					<img
						v-else-if="type === 'ameli-pro'"
						src="../../assets/images/ameli-pro.png"
						alt=""
					>
					<img
						v-else-if="type === 'risque-pro'"
						src="../../assets/images/logo-pro.png"
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
			@navigate="$emit('navigate')"
			@open-menu="openMenu"
		/>
		<HeaderMenu
			:is-open="isOpen"
			:nav-bar="navBar"
			@navigate="$emit('navigate')"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import HeaderMenu from './HeaderMenu';
	import HeaderNavBar from './HeaderNavBar';

	import { NavBar, ServiceItem } from './types';

	import { mdiMenu } from '@mdi/js';

	const Props = Vue.extend({
		components: {
			HeaderMenu,
			HeaderNavBar
		},
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
						console.error(`Wrong value for the \`position\` prop. Given: "${value}", expected "(ameli-pro|risque-pro|cnam)".`);
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
	@Component
	export default class HeaderBar extends MixinsDeclaration {
		locales = locales;

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

		openMenu() :void {
			this.isOpen = !this.isOpen;
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
				height: 160px;
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
