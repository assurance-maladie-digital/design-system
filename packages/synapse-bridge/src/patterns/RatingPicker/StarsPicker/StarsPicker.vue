<script lang="ts">
import { defineComponent } from "vue";
import { RatingMixin } from '../RatingMixin';
import { mdiStarOutline, mdiStar } from '@mdi/js';
export default defineComponent({
	mixins: [RatingMixin],
	emits: ["update:modelValue"],
	props: {
		length: {
			type: Number,
			default: 5
		}
	},
	data() {
		return {
			starOutlineIcon: mdiStarOutline,
			starIcon: mdiStar,
			hoverIndex: -1
		};
	},
	computed: {
		hasAnswered(): boolean {
			return this.modelValue !== -1;
		}
	},
	methods: {
		isActive(index: number): boolean {
			return this.modelValue - 1 === index;
		},
		isFilled(index: number): boolean {
			const isHovered = this.hoverIndex >= index;
			const isActive = this.modelValue - 1 >= index;
			return isHovered || isActive;
		}
	}
});
</script>

<template>
	<fieldset class="vd-stars-picker">
		<legend class="text-h6 mb-6">
			<slot name="label">
				{{ label }}
			</slot>
		</legend>

		<VRating
			:modelValue="modelValue"
			:length="length"
			:readonly="readonly || hasAnswered"
			class="d-flex flex-wrap max-width-none mx-n3"
			@update:modelValue="emitInputEvent"
		>
			<template #item="{ index }">
				<!-- Using click event on VIcon will convert it into a button -->
				<button
					@mouseover="hoverIndex = index"
					@focus="hoverIndex = index"
					@mouseleave="hoverIndex = -1"
					@blur="hoverIndex = -1"
					:disabled="readonly"
					:aria-pressed="isActive(index)"
				>
					<VIcon
						:class="isFilled(index) ? 'text-am-blue' : 'text-am-blue-lighten-60'"
						size="36px"
						class="py-0 px-2"
					>
						{{ isFilled(index) ? starIcon : starOutlineIcon }}
					</VIcon>
				</button>
			</template>
		</VRating>
	</fieldset>
</template>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';
.vd-stars-picker {
	border: 0;
}
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
