<template>
	<div class="external-links">
		<VBtn
			v-show="!drawer"
			ref="menuBtn"
			class="font-weight-bold py-1 external-link-btn btn-height accent"
			:style="{top: nudgeTop?`${nudgeTop}px`: ''}"
			@click="drawer = true"
		>
			<VIcon color="white">
				{{ iconRightChevron }}
			</VIcon>
		</VBtn>
		<VNavigationDrawer
			v-model="drawer"
			:class="{ 'fixed-on-scroll': fixed }"
			:style="{
				top: `${positionTop}px`
			}"
			class="external-link-drawer"
			:width="width"
			absolute
			floating
		>
			<VBtn
				large
				block
				tile
				depressed
				color="red"
				class="text-none btn-height"
				@click="drawer = false"
			>
				{{ btnText }}

				<VSpacer />

				<VIcon color="white">
					{{ iconLeftChevron }}
				</VIcon>
			</VBtn>

			<VList
				v-if="items.length"
				class="external-links"
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
	import Component from 'vue-class-component';

	import { locales } from './locales';

	import { ExternalLink } from './types';
	import { Refs } from '../../types';

	import { mdiChevronRight, mdiChevronLeft , mdiOpenInNew } from '@mdi/js';

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
			 * Set with of the menu drawer
			 * default value: 45px
			 */
			width:{
				type: Number,
				default: 450
			},
			/**
			 * Content of the list
			 * Type of an ExternalLink with: text and href fields
			 */
			items: {
				type: Array as PropType<Array<ExternalLink>> ,
				required: false,
				default: () => []
			},
			/**
			 * Title of the menu drawer
			 */
			btnText:{
				type: String,
				default : locales.btnText
			},
			/**
			 *  Set position of the button drawer
			 */
			nudgeTop: {
				type: Number,
				required: false,
				default: undefined
			}
		}
	});

	@Component
	export default class ExternalLinks extends Props {
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

		mounted():void {
          this.positionTop =this.getDistanceFromTop();
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
  max-height: 344px;
}

.external-links {
  overflow-y: auto;
  max-height: 296px;
}
</style>
