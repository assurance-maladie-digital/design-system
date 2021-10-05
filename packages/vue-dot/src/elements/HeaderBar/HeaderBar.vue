<template>
	<div class="vd-header d-flex flex-column justify-center w-100">
		<VSheet
			v-bind="options.headerConfig"
			:color="bgcColor"
			:dark="isDarkTheme"
			:height="responsiveHeaderHeight"
		>
			<VSheet
				:width="containerWidth"
				:color="bgcColor"
				:dark="isDarkTheme"
				class="d-flex justify-space-between align-center"
			>
				<div v-if="isCustom">
					<slot name="brand" />
				</div>

				<HeaderBrandSection
					v-else
					:has-daughter-brand="hasDaughterBrand"
					:header-config="headerConfig"
					:theme="theme"
					:is-mobile-screen="isMobileScreen"
					:class="responsiveClasses"
					:theme-color="themeColor"
				>
					<slot name="daughter-brand" />
				</HeaderBrandSection>

				<div
					:class="userBarClasses"
					class="d-flex"
				>
					<div
						v-if="hasUserSlot"
						class="d-flex align-center"
					>
						<slot name="user-bar" />
					</div>

					<div
						v-if="displaySearchBar"
						class="d-flex justify-center"
					>
						<VBtn
							v-bind="options.btnConfig"
							@click="openSearchBar"
						>
							<VIcon>
								{{ searchIcon }}
							</VIcon>
						</VBtn>
					</div>

					<div
						v-if="responsiveMenuPosition === 'header' && hasResponsiveNavigation"
						class="d-flex align-center d-md-none"
					>
						<VAppBarNavIcon
							v-bind="options.btnConfig"
							:color="themeColor"
							@click.stop="drawer = !drawer"
						/>
					</div>
				</div>
			</VSheet>
		</VSheet>
		<VNavigationDrawer
			v-model="drawer"
			v-bind="options.menuConfig"
			:color="themeColor"
			:dark="isSubDarkTheme"
			:width="responsiveMenu"
		>
			<VSheet
				v-bind="options.menuHeader"
				:color="themeColor"
				:dark="isSubDarkTheme"
			>
				<div class="d-flex align-center justify-space-between text-uppercase mx-5 my-2">
					<h4>
						{{ menuTitle }}
					</h4>

					<VBtn
						v-bind="options.closeBtn"
						:color="isSubDarkTheme ? 'white' : 'black'"
						@click="drawer = !drawer"
					>
						<VIcon>
							{{ closeMenuIcon }}
						</VIcon>
					</VBtn>
				</div>

				<div class="mx-5 my-3">
					<slot name="responsive-nav" />
				</div>
			</VSheet>
		</VNavigationDrawer>

		<div
			v-if="hasCustomSubHeaderBar"
			class="w-100"
		>
			<slot name="sub-bar" />
		</div>

		<VSheet
			v-else-if="(hasSubHeaderNavBar
				|| (hasNavigationBar && !isMobileScreen)
				|| (hasResponsiveNavigation && responsiveMenuPosition === 'sub-header'))
				&& !isSearchOpen"
			v-bind="options.subHeaderSection"
			:color="themeColor"
			:dark="isSubDarkTheme"
			class="d-flex align-center justify-center"
			:class="responsiveClasses"
		>
			<VSheet
				:color="themeColor"
				:dark="isSubDarkTheme"
				:width="containerWidth"
			>
				<div
					v-if="responsiveMenuPosition === 'sub-header' && hasResponsiveNavigation"
					class="d-flex align-center d-md-none"
				>
					<VAppBarNavIcon
						v-bind="options.btnConfig"
						:color="isSubDarkTheme ? 'white' : 'black'"
						@click.stop="drawer = !drawer"
					/>
				</div>

				<div v-if="hasSubHeaderNavBar || !isMobileScreen">
					<slot name="navigation" />
				</div>
			</VSheet>
		</VSheet>

		<VSheet
			v-if="isSearchOpen"
			v-bind="options.serchSection"
		>
			<SearchBar
				:theme-color="themeColor"
				:search="searchValue"
				@search="$emit('search', $event)"
			/>
		</VSheet>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import HeaderBrandSection from './HeaderBrandSection';
	import SearchBar from './SearchBar';

	import { mdiMagnify, mdiChevronLeft } from '@mdi/js';

	import { HeaderBarConfig, HeaderNavBarConfig } from './types';

	const Props = Vue.extend({
		props: {
			displaySearchBar: {
				type: Boolean,
				default: false
			},
			headerConfig: {
				type: Object as PropType<HeaderBarConfig>,
				default: undefined
			},
			navBar: {
				type: Object as PropType<HeaderNavBarConfig>,
				default: undefined
			},
			theme: {
				type: String,
				default: 'ameli.fr',
				validator(value: string): boolean {
					const isValid = value.match(/^(cnam|ameli.fr|ameli-pro|risque-pro|custom)$/) !== null;
					if (!isValid) {
						// eslint-disable-next-line no-console
						console.error(`Wrong value for the \`type\` prop. 
						Given: "${value}", expected "(cnam|ameli.fr|ameli-pro|risque-pro|custom)".`);
					}
					return true;
				}
			},
			responsiveMenuPosition: {
				type: String,
				default: 'header',
				validator(value: string): boolean {
					const isValid = value.match(/^(header|sub-header|hide)$/) !== null;
					if (!isValid) {
						// eslint-disable-next-line no-console
						console.error(`Wrong value for the \`type\` prop. 
						Given: "${value}", expected "(header|sub-header|hide)".`);
					}
					return true;
				}
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component<HeaderBar>({
		inheritAttrs: false,
		components: {
			HeaderBrandSection,
			SearchBar
		},
		watch: {
			group() {
				this.drawer = false;
			}
		}
	})
	export default class HeaderBar extends MixinsDeclaration {
		// Icons
		searchIcon = mdiMagnify;
		closeMenuIcon = mdiChevronLeft;

		locales = locales;

		isSearchOpen = false;
		drawer = false;
		group = null;
		searchValue = '';

		get hasDaughterBrand(): boolean {
			return Boolean(this.$slots['daughter-brand']);
		}

		get hasUserSlot(): boolean {
			return Boolean(this.$slots['user-bar']);
		}

		get hasCustomSubHeaderBar(): boolean {
			return Boolean(this.$slots['sub-bar']);
		}

		get hasNavigationBar(): boolean {
			return Boolean(this.$slots['navigation']);
		}

		get hasResponsiveNavigation(): boolean {
			return Boolean(this.$slots['responsive-nav']);
		}

		get hasSubHeaderNavBar(): boolean {
			return Boolean(this.navBar);
		}

		get bgcColor(): string {
			return this.headerConfig?.bgcColor ? this.headerConfig.bgcColor as string : 'transparent';
		}

		get themeColor(): string {
			if(this.navBar?.bgcColor) {
				return this.navBar.bgcColor as string;
			} else if(this.theme === 'ameli-pro') {
				return '#00749C';
			} else if(this.theme === 'risque-pro') {
				return '#CD545B';
			} else if(this.theme === 'ameli.fr') {
				return '#001C6B';
			}
			return '#001C6B';
		}

		get containerWidth(): string {
			if(this.isMobileScreen) {
				return '100%';
			}
			return this.headerConfig?.boxSize ? this.headerConfig.boxSize as string : '100%';
		}

		get isCustom(): boolean {
			return Boolean(this.theme === 'custom');
		}

		get isDarkTheme(): boolean {
			return this.headerConfig?.dark ? this.headerConfig.dark as boolean : false;
		}

		get isSubDarkTheme(): boolean {
			return this.navBar?.dark === false ? false : true;
		}

		get isMobileScreen(): boolean {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return true;
				case 'sm': return true;
				case 'md': return false;
				case 'lg': return false;
				case 'xl': return false;
			}
			return true;
		}

		get responsiveClasses(): string {
			return this.isMobileScreen ? 'vd-header-brand-responsive' : 'vd-header-brand';
		}

		get userBarClasses(): string {
			if(this.hasUserSlot) {
				return 'ma-0';
			}
			return this.isMobileScreen ? 'ma-4' : 'ma-6';
		}

		get imageFolder(): string {
			return this.isMobileScreen ? 'mobile' : 'desktop';
		}

		get responsiveHeaderHeight(): string {
			return this.isMobileScreen ? '72px' : '120px';
		}

		get responsiveMenu(): string {
			return this.$vuetify.breakpoint.name === 'xs' ? '100vw' : '305';
		}

		get menuTitle(): string {
			return this.headerConfig?.service?.title ? this.headerConfig?.service?.title.text : locales.menu;
		}

		openSearchBar(): void {
			this.searchValue = '';
			this.isSearchOpen = !this.isSearchOpen;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header {
		box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
					0px 2px 2px rgba(0, 0, 0, 0.14),
					0px 1px 5px rgba(0, 0, 0, 0.12);
	}
</style>
