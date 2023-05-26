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
				<!-- eslint-disable-next-line vuejs-accessibility/mouse-events-have-key-events -->
				<label
					class="px-2"
					@mouseover="!readonly && (hoverIndex = index)"
					@mouseleave="hoverIndex = -1"
					@click="click"
					@keydown.left.right="click"
				>
					<input
						:checked="isActive(index)"
						:disabled="readonly"
						type="radio"
						class="d-sr-only"
						@focus="!readonly && (hoverIndex = index)"
						@focusout="hoverIndex = -1"
					>

					<VIcon
						size="36px"
						color="primary"
						class="pa-0"
						:class="isFilled(index) ? 'am-blue--text' : 'am-blue-lighten-60--text'"
					>
						{{ isFilled(index) ? starIcon : starOutlineIcon }}
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

		hoverIndex = -1;

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

	.v-rating label {
		cursor: pointer;

		.v-icon {
			pointer-events: none;
		}
	}
</style>
