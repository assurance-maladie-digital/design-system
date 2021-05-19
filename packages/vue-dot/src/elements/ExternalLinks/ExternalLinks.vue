<template>
	<div class="liens-externes">
		<VBtn
			v-show="!drawer"
			class="font-weight-bold py-1 liens-externes-btn accent"
			@click="drawer = true"
		>
			<VIcon color="white">
				{{ iconRightChevron }}
			</VIcon>
		</VBtn>
		<VNavigationDrawer
			v-model="drawer"
			:class="{ 'fixed-on-scroll': fixed }"
			class="liens-externes-drawer elevation-2"
			:width="width"
			absolute
			floating
		>
			<VBtn
				large
				block
				tile
				depressed
				color="accent"
				class="text-none"
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
				:style="{
					top: distanceTop,
					maxHeight: innerMaxHeight,
				}"
				class="liens-externes-links"
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
							{{ iconRightChevron }}
						</VIcon>
					</VListItemIcon>
				</VListItem>
			</VList>

			<p
				v-else
				class="mx-5 my-3"
			>
				{{ locales.emptyLink }}
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

	import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			fixed: {
				type: Boolean,
				default: false
			},
			distanceTop: {
				type: String,
				default: '25px'
			},
			width:{
				type: Number,
				default: 450
			},
			items: {
				type: Array as PropType<Array<ExternalLink>> ,
				required: false,
				default: () => []
			},
			btnText:{
				type: String,
				default : locales.btnText
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

		drawer = false;

		maxHeight = 'auto';
		innerMaxHeight = 'auto';

		/** Set drawer maximum height */
		public setMaxHeight(): void{
			/** Margin with window */
			const marginBottom = 15;
			/** Calc height */
			const height = window.innerHeight - this.getDistanceFromTop() - marginBottom;

			this.maxHeight = height + 'px';

			const btnHeight = this.$refs.menuBtn.$el.getBoundingClientRect().height;

			// Set the inner height (drawer - btn = list height)
			this.innerMaxHeight = height - btnHeight + 'px';
		}

		/** Get distance between the button and windows top */
		public getDistanceFromTop() : number{
			return window.pageYOffset + this.$refs.menuBtn.$el.getBoundingClientRect().top;
		}
	}
</script>

<style lang="scss">

.liens-externes {
  left: 0 !important;
}

.liens-externes-btn {
  position: absolute !important;
  z-index: 6;
  left: 0;
  min-height: 48px;
  border-radius: 0;
}

.liens-externes-drawer {
  z-index: 5 !important;
  left: 0;
  height: auto !important;
}

.liens-externes-links {
  overflow-y: auto;
}
</style>