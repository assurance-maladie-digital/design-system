<template>
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
				<slot name="brand">
					<HeaderBrandSection
						:theme="theme"
						:service-title="serviceTitle"
						:service-sub-title="serviceSubTitle"
						:is-mobile="isMobile"
					>
						<slot name="secondary-logo" />
					</HeaderBrandSection>
				</slot>

				<VSpacer v-bind="options.spacer" />

				<slot />
			</VSheet>
		</VSheet>

		<HeaderNavigationBar
			v-if="showNavigationBar"
			:theme="theme"
			:is-mobile="isMobile"
			:items="navigationItems"
			:inner-width="innerWidth"
		>
			<slot name="navigation-bar-content" />

			<template #navigation-bar-drawer-content>
				<slot name="navigation-bar-drawer-content" />
			</template>
		</HeaderNavigationBar>
	</VAppBar>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import HeaderBrandSection from './HeaderBrandSection';
	import HeaderNavigationBar from './HeaderNavigationBar';

	import { NavigationItem } from './types';

	import { ThemeEnum, THEME_ENUM_VALUES } from './ThemeEnum';
	import { config } from './config';

	import { propValidator } from '../../helpers/propValidator';

	import { customizable } from '../../mixins/customizable';

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
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		inheritAttrs: false,
		components: {
			HeaderBrandSection,
			HeaderNavigationBar
		}
	})
	export default class HeaderBar extends MixinsDeclaration {
		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		get spacingClass(): string {
			return this.isMobile ? 'pa-4' : 'px-14 py-7';
		}

		get contentSheetHeight(): number {
			return this.isMobile ? 72 : 120;
		}

		get height(): number {
			if (this.showNavigationBar) {
				return this.contentSheetHeight + 48;
			}

			return this.contentSheetHeight;
		}

		get showNavigationBar(): boolean {
			return Boolean(this.navigationItems || this.$slots['navigation-bar-content']);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar ::v-deep .v-toolbar__content {
		display: block;
		padding: 0;
	}

	.vd-header-bar-content {
		overflow: hidden;
	}
</style>
