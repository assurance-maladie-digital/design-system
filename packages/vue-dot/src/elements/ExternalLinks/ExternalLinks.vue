<template>
	<div>
		<VBtn
			v-show="!drawer"
			ref="menuBtn"
			v-bind="options.vBtn"
			:style="nudgePositionTop"
			@click="drawer = true"
		>
			<VIcon v-bind="options.vIcon">
				{{ iconRightChevron }}
			</VIcon>
		</VBtn>

		<VNavigationDrawer
			v-model="drawer"
			v-bind="options.vNavigationDrawer"
			:class="{ 'fixed-on-scroll': fixed, 'external-link-drawer':true}"
			:style="posTop"
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
			>
				<VListItem
					v-for="item in items"
					:key="item.text"
					:href="item.href"
					target="_blank"
				>
					<VListItemContent>
						<VListItemTitle v-text="item.text" />
					</VListItemContent>

					<VListItemIcon>
						<VIcon>
							<slot name="LinkIcon">
								{{ iconLinks }}
							</slot>
						</VIcon>
					</VListItemIcon>
				</VListItem>
			</VList>

			<p
				v-else
				class="mx-5 my-3"
			>
				{{ noDatas }}
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

	import { ExternalLink, IFieldStyleType } from './types';
	import { Refs } from '../../types';

	import { mdiChevronRight, mdiChevronLeft , mdiOpenInNew } from '@mdi/js';

	import { Widthable } from '../../mixins/widthable';

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
				default : locales.btnText
			},
			/**
			 *  Set position of the button drawer
			 */
			nudgeTop: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(customizable(config), Props, Widthable);

	@Component
	export default class ExternalLinks extends MixinsDeclaration {
        $refs!: Refs<{
			menuBtn: Vue;
		}>;

		iconRightChevron = mdiChevronRight;
		iconLeftChevron = mdiChevronLeft;
		iconLinks = mdiOpenInNew;

		drawer = false;

		maxHeight = 'auto';
		innerMaxHeight = 'auto';

		positionTop = 0;

        /** return text data */
        get noDatas():string{
            return locales.noDatas;
        }
        /** return the nudge position of button drawer */
        get nudgePositionTop(): IFieldStyleType {
			return {
				top: this.nudgeTop?this.nudgeTop +'px':''
			};
		}
        /** return the position top of the nutton drawer */
		get posTop(): IFieldStyleType{
			return {
				top: this.positionTop +'px'
			};
		}

		mounted(): void {
			this.positionTop = this.getDistanceFromTop();
		}

		/** Get distance between the button and windows top */
		public getDistanceFromTop() : number{
			return window.pageYOffset + (this.$refs.menuBtn.$el.getBoundingClientRect().top -this.$refs.menuBtn.$el.getBoundingClientRect().height-10);
		}
	}
</script>

<style lang="scss">

.external-link {
 min-height: 48px;
}
.btn-height{
	min-height: 48px;
}
.external-link-btn {
  position: absolute;
  z-index: 6;
  left: 0;
  border-radius: 0;
}

.external-link-drawer {
  z-index: 5 ;
  left: 0;
  min-width: 320px!important;
  max-height: 320px;
}

.external-links {
  overflow-y: auto;
  max-height: 296px;
}
</style>
