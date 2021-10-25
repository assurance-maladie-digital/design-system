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
				<div
					v-if="isMobile"
					class="d-flex align-center"
				>
					<VBtn
						v-bind="options.menuBtn"
						:aria-label="menuBtnActionLabel"
						@click="emitDrawerEvent"
					>
						<VIcon v-bind="options.menuIcon">
							{{ menuIcon }}
						</VIcon>
					</VBtn>

					<h2
						v-if="activeTabLabel"
						class="text-body-2 text-sm-subtitle-1 ml-4"
					>
						{{ activeTabLabel }}
					</h2>
				</div>

				<VTabs
					v-else
					v-bind="options.tabs"
					:value="tab"
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
			</slot>
		</VSheet>
	</VSheet>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';
	import { mdiClose, mdiMenu } from '@mdi/js';

	import { NavigationItem } from '../types';
	import { locales } from './locales';
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
			innerWidth: {
				type: String,
				default: undefined
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

	@Component
	export default class HeaderNavigationBar extends MixinsDeclaration {
		locales = locales;

		menuIcon = mdiMenu;
		closeIcon = mdiClose;

		get spacingClass(): string {
			return this.isMobile ? 'px-4' : 'px-14';
		}

		get backgroundColor(): string {
			return colorMapping[this.theme];
		}

		get activeTabLabel(): string | undefined {
			if (this.tab === null) {
				return undefined;
			}

			let item: NavigationItem | undefined;

			if (typeof this.tab === 'string') {
				item = this.findItemByPath(this.tab);
			} else {
				item = this.items[this.tab];
			}

			return item?.label;
		}

		get menuBtnActionLabel(): string {
			const action = this.drawer ? locales.close : locales.open;

			return locales.menuBtnLabel(action);
		}

		findItemByPath(tab: string): NavigationItem | undefined {
			return this.items.find((item) => tab === this.getItemPath(item));
		}

		/**
		 * Get item by path using Vuetify resolution algorithm
		 *
		 * @see https://github.com/vuetifyjs/vuetify/blob/master/packages/vuetify/src/components/VTabs/VTab.ts#L51
		 */
		getItemPath(item: NavigationItem): string {
			let path: string;

			if (item.to && typeof item.to === 'object') {
				const resolve = this.$router.resolve(item.to as RawLocation, this.$route);
				path = resolve.href;
			} else {
				const itemTo = item.to as unknown as string;
				path = itemTo || item.href || '';
			}

			return path.replace('#', '');
		}

		toggleDrawer(value: boolean): void {
			this.drawer = value;
		}

		emitDrawerEvent(): void {
			this.$emit('update:drawer', !this.drawer);
		}

		emitTabUpdateEvent(value: number): void {
			this.$emit('update:tab', value);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-navigation-bar {
		overflow: hidden;
	}
</style>
