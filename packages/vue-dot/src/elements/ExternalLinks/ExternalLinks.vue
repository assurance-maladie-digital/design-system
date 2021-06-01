<template>
	<div
		:class="{ 'vd-fixed-on-scroll': fixed }"
		class="vd-external-links"
	>
		<VBtn
			v-show="!drawer"
			ref="menuBtn"
			v-bind="options.btn"
			:style="nudgePositionTop"
			class="vd-external-links-btn"
			@click="drawer = true"
		>
			<VIcon v-bind="options.icon">
				{{ iconRightChevron }}
			</VIcon>
		</VBtn>

		<VNavigationDrawer
			v-model="drawer"
			v-bind="options.navigationDrawer"
			:style="posTop"
			class="vd-external-links-drawer"
		>
			<VBtn
				v-bind="options.vBtnNavDrawer"
				@click="drawer = false"
			>
				{{ btnText }}

				<VSpacer />

				<VIcon v-bind="options.vIcon">
					{{ iconLeftChevron }}
				</VIcon>
			</VBtn>

			<VList
				v-if="items.length"
				v-bind="options.list"
				class="vd-external-links-list"
			>
				<VListItem
					v-for="(item, index) in items"
					:key="index"
					v-bind="options.listItem"
					:href="item.href"
				>
					<VListItemContent>
						<VListItemTitle v-text="item.text" />
					</VListItemContent>

					<VListItemIcon>
						<slot name="link-icon">
							<VIcon>
								{{ iconLinks }}
							</VIcon>
						</slot>
					</VListItemIcon>
				</VListItem>
			</VList>

			<p
				v-else
				class="px-4 py-3 mb-0"
			>
				{{ locales.noData }}
			</p>
		</VNavigationDrawer>
	</div>
</template>

<script lang='ts'>
	import Vue , { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { ExternalLink, StyleObject } from './types';
	import { Refs } from '../../types';

	import { mdiChevronRight, mdiChevronLeft, mdiOpenInNew } from '@mdi/js';

	import { Widthable } from '../../mixins/widthable';
	import { convertToUnit } from '../../helpers/convertToUnit';

	const Props = Vue.extend({
		props: {
			/**
			 * Fixed on scroll or not
			 */
			fixed: {
				type: Boolean,
				default: false
			},
			/**
			 * Content of the list
			 * Type of an ExternalLink with: text and href fields
			 */
			items: {
				type: Array as PropType<ExternalLink[]>,
				default: () => []
			},
			/**
			 * Title of the menu drawer
			 */
			btnText: {
				type: String,
				default: locales.btnText
			},
			/**
			 *  Set position of the button drawer
			 */
			nudgeTop: {
				type: [String, Number],
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), Widthable);

	@Component
	export default class ExternalLinks extends MixinsDeclaration {
		$refs!: Refs<{
			menuBtn: Vue;
		}>;

		locales = locales;

		iconRightChevron = mdiChevronRight;
		iconLeftChevron = mdiChevronLeft;
		iconLinks = mdiOpenInNew;

		drawer = false;

		positionTop = 0;

		/** return the nudge position of button drawer */
		get nudgePositionTop(): StyleObject {
			return {
				top: convertToUnit(this.nudgeTop)
			};
		}

		/** return the position top of the nutton drawer */
		get posTop(): StyleObject {
			return {
				top: convertToUnit(this.positionTop)
			};
		}

		mounted(): void {
			this.positionTop = this.getDistanceFromTop();
		}

		/** Get distance between the button and window top */
		public getDistanceFromTop(): number {
			const pageScroll = window.pageYOffset;

			return pageScroll + (this.$refs.menuBtn.$el.getBoundingClientRect().top - this.$refs.menuBtn.$el.getBoundingClientRect().height - 16);
		}
	}
</script>

<style lang="scss">
	$list-max-height: 248px;

	.vd-external-links-btn {
		// Use CSS since Vuetify forces a 16px minimum spacing
		position: absolute;
		z-index: 4;
		left: 0;
	}

	.vd-external-links-list {
		max-height: $list-max-height;
		overflow-y: auto;
	}

	.vd-external-links-drawer {
		z-index: 3;
		left: 0;
		min-width: 320px !important;

		::v-deep .v-navigation-drawer__content {
			overflow: hidden;
		}
	}
</style>
