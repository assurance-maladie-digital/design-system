<template>
	<div class="vd-header-bar-container w-100">
		<VAppBar
			v-bind="{
				...options.appBar,
				...$attrs
			}"
			:height="height"
			class="vd-header-bar"
		>
			<VSheet
				v-bind="options.contentSheet"
				:height="contentSheetHeight"
				:class="spacingClass"
				class="vd-header-bar-content d-flex justify-center"
			>
				<VSheet
					v-bind="options.innerSheet"
					:width="innerWidth"
				>
					<HeaderBrandSection
						:theme="theme"
						:service-title="serviceTitle"
						:service-sub-title="serviceSubTitle"
						:mobile-version="isMobileVersion"
						:home-link="homeLink"
					>
						<slot name="secondary-logo" />
					</HeaderBrandSection>

					<VSpacer v-bind="options.spacer" />

					<slot />

					<HeaderMenuBtn
						v-if="showHeaderMenuBtn"
						v-bind="options.menuBtn"
						@click="updateDrawer(!drawer)"
					/>
				</VSheet>
			</VSheet>

			<template v-if="showNavigationBar">
				<HeaderNavigationBar
					:tab.sync="tab"
					:drawer.sync="drawer"
					:theme="theme"
					:mobile-version="isMobileVersion"
					:items="navigationItems"
					:inner-width="innerWidth"
					:show-menu-btn="showNavBarMenuBtn"
				>
					<slot name="navigation-bar-content" />
				</HeaderNavigationBar>
			</template>
		</VAppBar>

		<slot
			name="navigation-drawer"
			v-bind="{ drawer, updateDrawer }"
		>
			<HeaderNavigationDrawer
				v-model="drawer"
				:tab.sync="tab"
				:theme="theme"
				:items="navigationItems"
				:mobile-version="isMobileVersion"
			>
				<slot name="navigation-drawer-content" />
			</HeaderNavigationDrawer>
		</slot>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import HeaderBrandSection from './HeaderBrandSection';
	import HeaderMenuBtn from './HeaderMenuBtn';
	import HeaderNavigationBar from './HeaderNavigationBar';
	import HeaderNavigationDrawer from './HeaderNavigationDrawer';

	import { NavigationItem } from './types';

	import { ThemeEnum, THEME_ENUM_VALUES } from './ThemeEnum';
	import { config } from './config';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';
	import { Next } from '../../types';

	const Props = Vue.extend({
		props: {
			theme: {
				type: String as PropType<ThemeEnum>,
				default: ThemeEnum.DEFAULT,
				validator: (value: string) => propValidator('theme', THEME_ENUM_VALUES, value)
			},
			serviceTitle: {
				type: String,
				default: undefined
			},
			serviceSubTitle: {
				type: String,
				default: undefined
			},
			navigationItems: {
				type: Array as PropType<NavigationItem[]>,
				default: undefined
			},
			innerWidth: {
				type: String,
				default: '100%'
			},
			homeLink: {
				type: [String, Boolean, Object] as PropType<Next>,
				default: undefined
			},
			showNavBarMenuBtn: {
				type: Boolean,
				default: false
			},
			mobileVersion: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		components: {
			HeaderBrandSection,
			HeaderMenuBtn,
			HeaderNavigationBar,
			HeaderNavigationDrawer
		}
	})
	export default class HeaderBar extends MixinsDeclaration {
		drawer: boolean | null = null;
		tab: number | null = null;

		get isMobileVersion(): boolean {
			if (this.mobileVersion) {
				return true;
			}

			return this.$vuetify.breakpoint.smAndDown;
		}

		get spacingClass(): string {
			return this.isMobileVersion ? 'pa-4' : 'px-14 py-7';
		}

		get contentSheetHeight(): number {
			return this.isMobileVersion ? 72 : 120;
		}

		get height(): number {
			if (this.showNavigationBar) {
				return this.contentSheetHeight + 48;
			}

			return this.contentSheetHeight;
		}

		get hasNavigationItems(): boolean {
			return Boolean(this.navigationItems || this.$slots['navigation-bar-content']);
		}

		get showHeaderMenuBtn(): boolean {
			const hasNavigation = Boolean(this.hasNavigationItems || this.$scopedSlots['navigation-drawer']);

			return !this.showNavBarMenuBtn && this.isMobileVersion && hasNavigation;
		}

		get showNavigationBar(): boolean {
			if (this.showHeaderMenuBtn) {
				return false;
			}

			return this.hasNavigationItems;
		}

		updateDrawer(value: boolean): void {
			this.drawer = value;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar ::v-deep .v-toolbar__content {
		display: block;
		padding: 0;
	}

	.vd-header-bar,
	.vd-header-bar-content {
		overflow: hidden;
	}

	.vd-header-menu-btn ::v-deep {
		.v-btn__content {
			flex-direction: column;
		}

		.v-icon {
			margin: 0 !important;
		}
	}
</style>
