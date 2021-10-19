<template>
	<VSheet
		v-bind="options.sheet"
		class="vd-header-bar"
	>
		<VSheet
			v-bind="options.contentSheet"
			:height="height"
			:class="spacingClass"
			class="vd-header-bar-content d-flex align-center justify-center"
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
			<slot name="navigation-bar" />

			<template #navigation-bar-content>
				<slot name="navigation-bar-drawer-content" />
			</template>
		</HeaderNavigationBar>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import HeaderBrandSection from './HeaderBrandSection';
	import HeaderNavigationBar from './HeaderNavigationBar';

	import { NavigationItem } from './HeaderNavigationBar/types';

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

		get height(): string {
			return this.isMobile ? '72px' : '120px';
		}

		get showNavigationBar(): boolean {
			return Boolean(this.navigationItems || this.$slots['navigation-bar']);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar {
		box-shadow:
			0px 3px 1px -2px rgba(0, 0, 0, .2),
			0px 2px 2px rgba(0, 0, 0, .14),
			0px 1px 5px rgba(0, 0, 0, .12);
	}

	.vd-header-bar-content {
		overflow: hidden;
	}
</style>
