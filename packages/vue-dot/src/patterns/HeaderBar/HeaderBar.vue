<template>
	<div class="vd-header-bar-container w-100">
		<VAppBar
			v-scroll="onScroll"
			v-bind="{
				...options.appBar,
				...$attrs
			}"
			:height="height"
			:fixed="isSticky"
			class="vd-header-bar header transition-ease-in-out duration-100"
		>
			<VSheet
				v-bind="options.contentSheet"
				:height="contentSheetHeight"
				:class="spacingClass"
				class="vd-header-bar-content d-flex justify-center transition-ease-in-out duration-100"
			>
				<VSheet
					v-bind="options.innerSheet"
					:width="innerWidth"
				>
					<slot name="logo">
						<LogoBrandSection
							v-bind="options.brandSection"
							:theme="theme"
							:service-title="serviceTitle"
							:service-sub-title="serviceSubTitle"
							:mobile-version="isMobileVersion"
							:sticky="isSticky"
							:home-link="homeLink"
							:home-href="homeHref"
						>
							<slot name="secondary-logo" />
						</LogoBrandSection>
					</slot>

					<VSpacer
						v-if="showSpacer"
						v-bind="options.spacer"
					/>

					<slot />

					<HeaderMenuBtn
						v-if="showHeaderMenuBtn"
						:vuetify-options="options.menuBtn"
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
					:vuetify-options="options.navigationBar"
				>
					<slot name="navigation-bar-content" />

					<template #navigation-bar-secondary-content>
						<slot name="navigation-bar-secondary-content" />
					</template>
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
				:vuetify-options="options.navigationDrawer"
			>
				<slot name="navigation-drawer-content" />
			</HeaderNavigationDrawer>
		</slot>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import LogoBrandSection from '../LogoBrandSection';
	import HeaderMenuBtn from './HeaderMenuBtn';
	import HeaderNavigationBar from './HeaderNavigationBar';
	import HeaderNavigationDrawer from './HeaderNavigationDrawer';

	import { NavigationItem } from './types';

	import { ThemeEnum, THEME_ENUM_VALUES } from './ThemeEnum';
	import { config } from './config';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';
	import { Next } from '../../types';
	import { Scroll } from 'vuetify/lib/directives';

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
			homeHref: {
				type: String,
				default: undefined
			},
			showNavBarMenuBtn: {
				type: Boolean,
				default: false
			},
			mobileVersion: {
				type: Boolean,
				default: false
			},
			sticky: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		directives: {
			Scroll
		},
		components: {
			LogoBrandSection,
			HeaderMenuBtn,
			HeaderNavigationBar,
			HeaderNavigationDrawer
		}
	})
	export default class HeaderBar extends MixinsDeclaration {
		drawer: boolean | null = null;
		tab: number | null = null;
		isScrolled: boolean | null = null;

		get isMobileVersion(): boolean {
			if (this.mobileVersion) {
				return true;
			}

			return this.$vuetify.breakpoint.smAndDown;
		}

		get isSticky(): boolean {
			if (this.sticky) {
				return true;
			} else {
				return false;
			}
		}

		get spacingClass(): string {
			return this.isMobileVersion ? 'pa-4' : 'px-14 py-7';
		}

		get contentSheetHeight(): number {
			if (this.isScrolled) {
				return this.isMobileVersion ? 52 : 72;
			} else {
				return this.isMobileVersion ? 72 : 120;
			}
		}

		get height(): number {
			if (this.showNavigationBar) {
				return this.contentSheetHeight + 48;
			}

			return this.contentSheetHeight;
		}

		get hasNavigationItems(): boolean {
			return Boolean(this.navigationItems || this.$slots['navigation-drawer-content']);
		}

		get showHeaderMenuBtn(): boolean {
			const hasNavigation = Boolean(this.navigationItems || this.$scopedSlots['navigation-drawer']);

			return !this.showNavBarMenuBtn && this.isMobileVersion && hasNavigation;
		}

		get showNavigationBar(): boolean {
			if (this.$slots['navigation-bar-content']) {
				return true;
			}

			if (this.showHeaderMenuBtn) {
				return false;
			}

			return this.hasNavigationItems;
		}

		get showSpacer(): boolean {
			return Boolean(this.$slots.default) || this.isMobileVersion;
		}

		updateDrawer(value: boolean): void {
			this.drawer = value;
		}

		onScroll(): void {
			const header = document.querySelector('.vd-header-bar.header');
			const headerHeight = header ? header.clientHeight : 0;
			const scrollPosition = window.scrollY;
			if (this.isSticky && scrollPosition > headerHeight) {
				this.isScrolled = true;
			} else {
				this.isScrolled = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar {
		z-index: 1;
	}

	.vd-header-bar :deep(.v-toolbar__content) {
		display: block;
		padding: 0;
	}

	.vd-header-menu-btn :deep() {
		.v-btn__content {
			flex-direction: column;
		}

		.v-icon {
			margin: 0 !important;
		}
	}
</style>
