<template>
	<VNavigationDrawer
		v-if="isMobile"
		v-bind="options.navigationDrawer"
		:value="drawer"
		:color="backgroundColor"
	>
		<slot>
			<div class="d-flex align-center mb-8">
				<h2
					v-if="activeTabLabel"
					class="text-subtitle-1 white--text"
				>
					{{ activeTabLabel }}
				</h2>

				<VSpacer v-bind="options.spacer" />

				<VBtn
					v-bind="options.closeBtn"
					@click="emitChangeEvent"
				>
					<VIcon v-bind="options.closeIcon">
						{{ closeIcon }}
					</VIcon>
				</VBtn>
			</div>

			<VTabs
				v-model="mobileTab"
				v-bind="options.mobileTabs"
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
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiClose } from '@mdi/js';

	import { NavigationItem } from '../types';
	import { config } from './config';
	import { colorMapping } from '../colorMapping';

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
			drawer: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		model: {
			prop: 'drawer',
			event: 'change'
		}
	})
	export default class HeaderNavigationDrawer extends MixinsDeclaration {
		closeIcon = mdiClose;

		mobileTab: number | null = null;

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

		emitChangeEvent(): void {
			this.$emit('change', !this.drawer);
		}
	}
</script>

<style lang="scss" scoped>
	.v-navigation-drawer .v-tab {
		height: 40px !important;

		&.v-tab--active {
			background: rgba($color: #fff, $alpha: .1);
		}
	}
</style>
