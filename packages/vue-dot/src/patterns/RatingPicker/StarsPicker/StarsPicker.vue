<template>
	<fieldset class="vd-stars-picker">
		<legend class="text-h6 mb-6">
			{{ label }}
		</legend>

		<VRating
			:value="value"
			:length="length"
			:readonly="readonly"
			class="d-flex flex-wrap max-width-none"
			@input="emitInputEvent"
		>
			<template #item="{ index, click }">
				<label
					:tabindex="tabIndex"
					@keydown.enter="click"
					@mouseover="!readonly && (hoverValue = index)"
					@focus="!readonly && (hoverValue = index)"
					@mouseleave="hoverValue = -1"
					@focusout="hoverValue = -1"
				>
					<input
						:name="'star-' + index"
						:value="index"
						:checked="isActive(index)"
						:disabled="readonly"
						class="d-sr-only"
						@click="click"
					>
					<VIcon
						v-if="isAfterHover(index) && !isActive(index) && !isBeforeActive(index)"
						x-large
						color="primary"
						class="pa-1"
						:class="{
							'after-active': isAfterActive(index)
						}"
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
		hoverValue = -1;
		defaultIndex = 1;

		get tabIndex(): number {
			return this.defaultIndex++;
		}

		isActive(index: number): boolean {
			return index === this.value - 1;
		}
		isBeforeActive(index: number): boolean {
			return index < this.value - 1;
		}
		isAfterActive(index: number): boolean {
			return index > this.value - 1;
		}
		isAfterHover(index: number): boolean {
			return index > this.hoverValue;
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-stars-picker {
		.v-rating {
			height: auto !important;
			width: auto !important;
			padding: 0;
			label {
				cursor: pointer;
			}
			label {
				&:focus {
					outline: none;
				}
			}
			.active, .before-active, .after-active {
				color: $vd-primary;
			}
			.active, .before-active {
				opacity: 1 !important;
			}
		}
	}
</style>
