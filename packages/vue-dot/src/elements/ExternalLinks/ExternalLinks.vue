<template>
	<VMenu
		ref="menu"
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
				@click="setMenuPosition"
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

		<VSheet
			v-else
			v-bind="options.sheet"
		>
			<p class="mb-0">
				{{ locales.noData }}
			</p>
		</VSheet>
	</VMenu>
</template>

<script lang='ts'>
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { PositionEnum } from './PositionEnum';

	import { ExternalLink, Position } from './types';
	import { IndexedObject, Refs } from '../../types';

	import { customizable } from '../../mixins/customizable';

	import {
		mdiChevronRight as rightArrowIcon,
		mdiChevronLeft as leftArrowIcon,
		mdiOpenInNew
	} from '@mdi/js';

	import { convertToUnit } from '../../helpers/convertToUnit';

	const SPACE_CHARACTER = ' ';

	const Props = Vue.extend({
		props: {
			/** Position of the component */
			position: {
				type: String,
				required: true,
				validator(value: string): boolean {
					const isValid = value.match(/^(top|bottom) (left|right)$/) !== null;

					if (!isValid) {
						// @see https://github.com/vuejs/vue/issues/9467#issuecomment-808924803
						// eslint-disable-next-line no-console
						console.error(`Wrong value for the \`position\` prop. Given: "${value}", expected "(top|bottom) (left|right)".`);
					}

					return true;
				}
			},
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
		// Extend $refs
		$refs!: Refs<{
			menu: {
				calculatedLeft: string;
			};
		}>;

		locales = locales;

		linkIcon = mdiOpenInNew;

		menu = false;
		hover = false;

		menuClass = '';

		get computedPosition(): Position {
			const [ y, x ] = this.position.split(SPACE_CHARACTER);

			return { x, y };
		}

		get right(): boolean {
			return this.computedPosition.x === PositionEnum.RIGHT;
		}

		get left(): boolean {
			return this.computedPosition.x === PositionEnum.LEFT;
		}

		get top(): boolean {
			return this.computedPosition.y === PositionEnum.TOP;
		}

		get bottom(): boolean {
			return this.computedPosition.y === PositionEnum.BOTTOM;
		}

		get open(): boolean {
			return this.menu || this.hover;
		}

		get menuClass(): string {
            return `${this.menuClassLeftOrRight}`;
		}

		get btnTextSpacing(): string {
			return this.right ? 'ml-2' : 'mr-2';
		}

		get transform(): string {
			const MIN_BTN_WIDTH = '48px';
			let translateValue: string;

			if (this.open) {
				translateValue = '0';
			} else {
				translateValue = this.right ? `calc(100% - ${MIN_BTN_WIDTH})` : `calc(-100% + ${MIN_BTN_WIDTH})`;
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

			// Change z-index to avoid shadow bleeding (VMenu is set to 4)
			const zIndex = this.top ? '4' : '5';

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
			const iconMapping: IndexedObject = {
				right: this.open ? rightArrowIcon : leftArrowIcon,
				left: this.open ? leftArrowIcon : rightArrowIcon
			};

			return iconMapping[this.computedPosition.x];
		}

		removeMarginLeftOrRight(): void {
			const positionClass = this.right ? 'right-0' : 'left-0';
            const margLeft= this.$refs.menu.calculatedLeft;
			if(margLeft !== '12px') {
				this.menuClassLeftOrRight = 'vd-external-links-menu';
			}else{
				this.menuClassLeftOrRight = `vd-external-links-menu ${positionClass}`;
			}
		}

		updated(): void {
			if(this.isClicked){
				setTimeout(() => {
					this.removeMarginLeftOrRight();
				},100);
				this.isClicked= false;
			}
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

	.vd-external-links-btn {
		// Allow overgrow on mobile
		max-width: none;

		::v-deep .v-btn__content {
			// Control flex-direction on the parent
			flex-direction: inherit;
		}
	}

	.vd-external-links-list {
		max-height: $list-max-height;
		overflow-y: auto;
	}

	@media only screen and (max-height: 340px) {
		.vd-external-links-btn {
			z-index: 4 !important;
		}
	}
</style>
