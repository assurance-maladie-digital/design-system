<template>
	<VSheet
		v-bind="options.sheet"
		:color="backgroundColor"
		:class="spacingClass"
		class="vd-navigation-bar d-flex align-center justify-center"
	>
		<VSheet
			v-bind="options.innerSheet"
			:width="innerWidth"
		>
			<slot>
				<VBtn
					v-if="isMobile"
					v-bind="options.menuBtn"
					:color="backgroundColor"
					@click="toggleDrawer(!drawer)"
				>
					<VIcon v-bind="options.menuIcon">
						{{ menuIcon }}
					</VIcon>

					{{ locales.menu }}
				</VBtn>

				<VTabs
					v-else
					v-bind="options.tabs"
					:background-color="backgroundColor"
				>
					<VTab
						v-for="(item, index) in items"
						:key="index"
						v-bind="options.tab"
						:href="item.href"
						:to="item.to"
					>
						{{ item.label }}
					</VTab>
				</VTabs>

				<VNavigationDrawer
					v-if="isMobile"
					v-model="drawer"
					v-bind="options.navigationDrawer"
					:color="backgroundColor"
				>
					<slot name="navigation-bar-drawer-content">
						<div class="d-flex align-center mb-8">
							<h2
								v-if="activeTabLabel"
								class="text-subtitle-1"
							>
								{{ activeTabLabel }}
							</h2>

							<VSpacer v-bind="options.spacer" />

							<VBtn
								v-bind="options.closeBtn"
								@click="toggleDrawer(false)"
							>
								<VIcon v-bind="options.clsoeIcon">
									{{ closeIcon }}
								</VIcon>
							</VBtn>
						</div>

						<VTabs
							v-model="mobileTab"
							v-bind="options.mobileTabs"
							:background-color="backgroundColor"
						>
							<VTab
								v-for="(item, index) in items"
								:key="index"
								v-bind="options.mobileTab"
								:href="item.href"
								:to="item.to"
							>
								{{ item.label }}
							</VTab>
						</VTabs>
					</slot>
				</VNavigationDrawer>
			</slot>
		</VSheet>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiClose, mdiMenu } from '@mdi/js';

	import { NavigationItem } from './types';
	import { locales } from './locales';
	import { config } from './config';
	import { colorMapping } from './colorMapping';

	import { ThemeEnum } from '../ThemeEnum';

	import { customizable } from '../../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			theme: {
				type: String as PropType<ThemeEnum>,
				required: true
			},
			items: {
				type: Array as PropType<NavigationItem[]>,
				default: undefined
			},
			isMobile: {
				type: Boolean,
				default: false
			},
			innerWidth: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class HeaderNavigationBar extends MixinsDeclaration {
		locales = locales;

		menuIcon = mdiMenu;
		closeIcon = mdiClose;

		mobileTab: number | null = null;
		drawer = false;

		get spacingClass(): string {
			return this.isMobile ? 'px-4' : 'px-14';
		}

		get backgroundColor(): string {
			return colorMapping[this.theme];
		}

		get activeTabLabel(): string | null {
			if (this.mobileTab === null) {
				return null;
			}

			const item = this.items[this.mobileTab];

			return item?.label;
		}

		toggleDrawer(value: boolean): void {
			this.drawer = value;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-navigation-bar {
		overflow: hidden;
	}

	.v-navigation-drawer .v-tab {
		height: 40px !important;

		&.v-tab--active {
			background: rgba($color: #fff, $alpha: .1);
		}
	}
</style>
