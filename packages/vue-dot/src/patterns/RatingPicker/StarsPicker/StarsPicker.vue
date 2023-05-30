<template>
	<fieldset class="vd-stars-picker">
		<legend class="text-h6 mb-6">
			{{ label }}
		</legend>

		<VRating
			:value="value"
			:length="length"
			:readonly="readonly"
			class="d-flex flex-wrap max-width-none mx-n3"
			@input="emitInputEvent"
		>
			<template #item="{ index, click }">
				<!-- Using click event on VIcon will convert it into a button -->
				<VIcon
					:disabled="readonly || hasAnswered"
					:aria-pressed="isActive(index).toString()"
					:class="isFilled(index) ? 'am-blue--text' : 'am-blue-lighten-60--text'"
					size="36px"
					class="py-0 px-2"
					@mouseover="hoverIndex = index"
					@focus="hoverIndex = index"
					@mouseleave="hoverIndex = -1"
					@blur="hoverIndex = -1"
					@click="click"
				>
					{{ isFilled(index) ? starIcon : starOutlineIcon }}
				</VIcon>
			</template>
		</VRating>
	</fieldset>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	import { mdiStarOutline, mdiStar } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			length: {
				type: Number,
				default: 5
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class StarsPicker extends MixinsDeclaration {
		starOutlineIcon = mdiStarOutline;
		starIcon = mdiStar;

		hoverIndex = -1;

		get hasAnswered(): boolean {
			return this.value !== -1;
		}

		isActive(index: number): boolean {
			return this.value - 1 === index;
		}

		isFilled(index: number): boolean {
			const isHovered = this.hoverIndex >= index;
			const isActive = this.value - 1 >= index;

			return isHovered || isActive;
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.v-rating .v-icon {
		width: 52px !important;
		height: 36px !important;

		&--disabled.am-blue--text {
			color: $vd-am-blue-base !important;
		}

		&--disabled.am-blue-lighten-60--text {
			color: $vd-am-blue-lighten-60 !important;
		}
	}
</style>
