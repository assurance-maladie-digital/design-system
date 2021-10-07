<template>
	<div class="vd-header-bar d-flex flex-column justify-center w-100">
		<VSheet
			v-bind="options.headerConfig"
			:dark="isDarkTheme"
			:height="responsiveHeaderHeight"
		>
			<VSheet
				:width="containerWidth"
				:dark="isDarkTheme"
				class="d-flex justify-space-between align-center"
			>
				<slot name="brand">
					<HeaderBrandSection
						:theme="theme"
						:service-title="serviceTitle"
						:service-sub-title="serviceSubTitle"

						:has-daughter-brand="hasDaughterBrand"
						:is-mobile-screen="isMobileScreen"
						:class="responsiveClasses"
					>
						<slot name="daughter-brand" />
					</HeaderBrandSection>
				</slot>

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
					<h1 class="primary--text">
						{{ menuTitle }}
					</h1>

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
			:class="responsiveClasses"
			class="d-flex align-center justify-center"
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
			v-bind="options.searchSection"
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

	const Props = Vue.extend({
		props: {
			theme: {
				type: String,
				default: 'cnam',
				validator(value: string): boolean {
					const isValid = value.match(/^(cnam|ameli|ameli-pro|risque-pro|custom)$/) !== null;

					if (!isValid) {
						// eslint-disable-next-line no-console
						console.error(`Wrong value for the \`type\` prop. Given: "${value}", expected "(cnam|ameli|ameli-pro|risque-pro|custom)".`);
					}

					return true;
				}
			},
			serviceTitle: {
				type: String,
				default: undefined
			},
			serviceSubTitle: {
				type: String,
				default: undefined
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
			},
			displaySearchBar: {
				type: Boolean,
				default: false
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

		get containerWidth(): string {
			if (this.isMobileScreen) {
				return '100%';
			}

			return '100%';
		}

		get isCustom(): boolean {
			return Boolean(this.theme === 'custom');
		}

		get isDarkTheme(): boolean {
			return false;
		}

		get isMobileScreen(): boolean {
			switch (this.$vuetify.breakpoint.name) {
				case 'xs': return true;
				case 'sm': return true;
				case 'md': return false;
				case 'lg': return false;
				case 'xl': return false;
				default: return true;
			}
		}

		get responsiveClasses(): string {
			return this.isMobileScreen ? 'vd-header-brand-responsive' : 'vd-header-brand';
		}

		get userBarClasses(): string {
			if (this.hasUserSlot) {
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
			return locales.menu;
		}

		openSearchBar(): void {
			this.searchValue = '';
			this.isSearchOpen = !this.isSearchOpen;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header {
		box-shadow:
			0px 3px 1px -2px rgba(0, 0, 0, .2),
			0px 2px 2px rgba(0, 0, 0, .14),
			0px 1px 5px rgba(0, 0, 0, .12);
	}
</style>
