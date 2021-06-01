<template>
	<VMenu
		v-model="menu"
		v-bind="options.menu"
		:top="bottom"
		:content-class="menuClass"
		class="vd-external-links"
	>
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.btn
				}"
				:style="btnStyle"
				class="vd-external-links-btn"
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				v-on="on"
			>
				<span
					:class="btnTextSpacing"
					class="vd-external-links-btn-text white--text text-none"
				>
					{{ btnText }}
				</span>

				<VSpacer v-bind="options.spacer" />

				<VIcon v-bind="options.btnIcon">
					{{ arrowIcon }}
				</VIcon>
			</VBtn>
		</template>

		<VList
			v-if="items.length"
			v-bind="options.list"
			class="vd-external-links-list"
		>
			<VListItem
				v-for="(item, index) in items"
				:key="index"
				:href="item.href"
				v-bind="options.listItem"
			>
				<VListItemContent v-bind="options.listItemContent">
					<VListItemTitle
						v-bind="options.listItemTitle"
						v-text="item.text"
					/>
				</VListItemContent>

				<VListItemIcon v-bind="options.listItemIcon">
					<slot name="link-icon">
						<VIcon v-bind="options.linkIcon">
							{{ linkIcon }}
						</VIcon>
					</slot>
				</VListItemIcon>
			</VListItem>
		</VList>

		<VCard
			v-else
			v-bind="options.card"
		>
			<p class="mb-0">
				{{ locales.noData }}
			</p>
		</VCard>
	</VMenu>
</template>

<script lang='ts'>
	import Vue , { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	import { ExternalLink } from './types';
	import { IndexedObject } from '../../types';

	import {
		mdiChevronRight as rightArrowIcon,
		mdiChevronLeft as leftArrowIcon,
		mdiOpenInNew
	} from '@mdi/js';

	import { convertToUnit } from '../../helpers/convertToUnit';

	const Props = Vue.extend({
		props: {
			/** Links to display in the list */
			items: {
				type: Array as PropType<ExternalLink[]>,
				default: () => []
			},
			/** The label of the button */
			btnText: {
				type: String,
				default: locales.btnText
			},
			/** Align the component towards left */
			left: {
				type: Boolean,
				default: false
			},
			/** Align the component towards right */
			right: {
				type: Boolean,
				default: false
			},
			/** Align the component towards top */
			top: {
				type: Boolean,
				default: false
			},
			/** Align the component towards bottom */
			bottom: {
				type: Boolean,
				default: false
			},
			/** Nudge the component to the top */
			nudgeTop: {
				type: [String, Number],
				default: 0
			},
			/** Nudge the component to the bottom */
			nudgeBottom: {
				type: [String, Number],
				default: 0
			},
			/** Apply position: fixed */
			fixed: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class ExternalLinks extends MixinsDeclaration {
		locales = locales;

		linkIcon = mdiOpenInNew;

		menu = false;
		hover = false;

		get menuClass(): string {
			const positionClass = this.right ? 'right-0' : 'left-0';

			return `vd-external-links-menu ${positionClass}`;
		}

		get btnTextSpacing(): string {
			return this.right ? 'ml-2' : 'mr-2';
		}

		get transform(): string {
			let translateValue: string;

			if (this.menu || this.hover) {
				translateValue = '0';
			} else {
				translateValue = this.right ? 'calc(100% - 48px)' : 'calc(-100% + 48px)';
			}

			return `translateX(${translateValue})`;
		}

		get computedNudgeTop(): string {
			return this.top ? convertToUnit(this.nudgeTop) as string : 'auto';
		}

		get computedNudgeBottom(): string {
			return this.bottom ? convertToUnit(this.nudgeBottom) as string : 'auto';
		}

		get btnStyle(): IndexedObject {
			const transform = this.transform;
			const position = this.fixed ? 'fixed' : 'absolute';
			const flexDirection = this.right ? 'row-reverse' : 'row';

			const top = this.computedNudgeTop;
			const bottom = this.computedNudgeBottom;
			const left = this.left ? '0' : 'auto';
			const right = this.right ? '0' : 'auto';

			// Change z-index to avoid shadow bleeding (VMenu is 8)
			const zIndex = this.top ? '8' : '9';

			return {
				transform,
				position,
				flexDirection,
				top,
				bottom,
				left,
				right,
				zIndex
			};
		}

		get arrowIcon(): string {
			if (this.right) {
				return this.menu ? rightArrowIcon : leftArrowIcon;
			}

			return this.menu ? leftArrowIcon : rightArrowIcon;
		}
	}
</script>

<style lang="scss">
	.vd-external-links-menu {
		// Use CSS since Vuetify forces a 12px minimum spacing
		&.left-0 {
			left: 0 !important;
		}

		&.right-0 {
			left: auto !important; // Override Vuetify computation
			right: 0 !important;
		}
	}
</style>

<style lang="scss" scoped>
	$list-max-height: 248px;

	.vd-external-links-btn ::v-deep .v-btn__content {
		flex-direction: inherit;
	}

	.vd-external-links-list {
		max-height: $list-max-height;
		overflow-y: auto;
	}
</style>
