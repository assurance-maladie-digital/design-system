<template>
	<div class="vd-stars-picker">
		<div class="text-h6 mb-6">
			{{ label }}
		</div>

		<VRating
			:value="value"
			:length="length"
			:readonly="readonly"
			class="d-flex flex-wrap max-width-none"
			@input="emitInputEvent"
		>
			<template #item="{ index, click }">
				<label
					:tabindex="index + 1"
					@keydown.enter="click"
					@mouseover="hoverValue = index"
					@focus="hoverValue = index"
					@mouseleave="hoverValue = -1"
					@focusout="hoverValue = -1"
				>
					<input
						type="radio"
						class="d-none"
						:name="'stars-' + index"
						:value="index"
						:checked="isActive(index)"
						:disabled="readonly"
						@click="click"
					>
					<VIcon
						v-if="isAfterHover(index) && !isActive(index) && !isBeforeActive(index)"
						x-large
						color="primary"
						class="pa-1"
						:style="{ opacity: isAfterHover(index) ? 0.5 : 1 }"
					>
						{{ starOutlineIcon }}
					</VIcon>
					<VIcon
						v-else
						x-large
						color="primary"
						class="pa-1"
						:class="{
							'active': isActive(index),
							'before-active': isBeforeActive(index)
						}"
						:style="{ opacity: isAfterHover(index) ? 0.5 : 1 }"
					>
						{{ starIcon }}
					</VIcon>
				</label>
			</template>
		</VRating>
	</div>
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
		hoverValue = -1;

		isActive(index: number): boolean {
			return index === this.value - 1;
		}
		isBeforeActive(index: number): boolean {
			return index < this.value - 1;
		}
		isAfterHover(index: number): boolean {
			return index > this.hoverValue;
		}
	}
</script>

<style lang="scss">
@import '@cnamts/design-tokens/dist/tokens';

.vd-stars-picker {
	.v-rating {
		height: auto !important;
		width: auto !important;
		padding: 0;
		label {
			cursor: pointer;
		}
		.active, .before-active {
			color: $vd-primary;
			opacity: 1 !important;
		}
	}
}
</style>
