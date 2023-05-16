<template>
	<VNavigationDrawer
		v-if="mobileVersion && items"
		v-bind="options"
		:value="drawer"
		:color="backgroundColor"
		@input="drawerUpdated"
	>
		<slot>
			<div class="d-flex flex-column justify-space-between h-100">
				<div>
					<div class="d-flex align-center justify-end mb-8">
						<VBtn
							v-bind="options.closeBtn"
							:aria-label="locales.closeBtn"
							@click="emitChangeEvent"
						>
							<VIcon v-bind="options.closeIcon">
								{{ closeIcon }}
							</VIcon>
						</VBtn>
					</div>

					<slot name="navigation-drawer-prepend" />

					<VTabs
						v-bind="options.tabs"
						:value="tab"
						optional
						@change="emitTabUpdateEvent"
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
				</div>

				<slot name="navigation-drawer-append" />
			</div>
		</slot>
	</VNavigationDrawer>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiClose } from '@mdi/js';

	import { config } from './config';
	import { locales } from './locales';
	import { NavigationItem } from '../types';
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
			mobileVersion: {
				type: Boolean,
				default: false
			},
			drawer: {
				type: Boolean,
				default: false
			},
			tab: {
				type: [Number, String],
				default: null
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
		locales = locales;

		closeIcon = mdiClose;

		get spacingClass(): string {
			return this.mobileVersion ? 'px-4' : 'px-14';
		}

		get backgroundColor(): string {
			return colorMapping[this.theme];
		}

		drawerUpdated(value: boolean): void {
			if (value === false) {
				this.$emit('change', false);
			}
		}

		emitChangeEvent(): void {
			this.$emit('change', !this.drawer);
		}

		emitTabUpdateEvent(value: number): void {
			this.$emit('update:tab', value);
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
	.nav {
		height: calc(100% - 68px);
	}
</style>
