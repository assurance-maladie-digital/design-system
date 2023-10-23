<template>
	<div class="vd-rating-picker">
		<component
			:is="ratingComponent"
			:label="label"
			:length="length"
			:readonly="readonly"
			:item-labels="itemLabels || undefined"
			:model-value="internalValue"
			@update:model-value="setValue"
		/>

		<template v-if="hasAnswered">
			<AlertWrapper
				:class="{ 'mb-0': !displayAdditionalContent }"
				outlined
				type="success"
				class="mt-4"
			>
				{{ locales.thanks }}
			</AlertWrapper>

			<slot v-if="displayAdditionalContent" />
		</template>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import EmotionPicker from './EmotionPicker';
import NumberPicker from './NumberPicker';
import StarsPicker from './StarsPicker';

import AlertWrapper from '@/patterns/AlertWrapper/AlertWrapper.vue';

import { RATING_ENUM_VALUES, RatingEnum } from './RatingMixin';

import { propValidator } from '../../helpers/propValidator';

import { locales } from './locales';

const Props = {
	props: {
		type: {
			type: String as PropType<RatingEnum>,
			required: true,
			validator: (value: string) => propValidator('type', RATING_ENUM_VALUES, value)
		},
		label: {
			type: String,
			required: true
		},
		readonly: {
			type: Boolean,
			default: false
		},
		itemLabels: {
			type: Array as PropType<string[]>,
			default: null
		},
		twoEmotions: {
			type: Boolean,
			default: false
		},
		value: {
			type: Number,
			default: -1
		}
	}
};

export default defineComponent({
	components: {
		EmotionPicker,
		NumberPicker,
		StarsPicker,
		AlertWrapper
	},
	mixins: [Props],
	emits: ["update:modelValue"],
	data() {
		return {
			locales,

			internalValue: -1,
			displayAdditionalContent: false,

			ratingComponentMapping: {
				[RatingEnum.EMOTION]: 'EmotionPicker',
				[RatingEnum.STARS]: 'StarsPicker',
				[RatingEnum.NUMBER]: 'NumberPicker',
			}
		};
	},
	computed: {
		ratingComponent(): string {
			return this.ratingComponentMapping[this.type];
		},

		length(): number | undefined {
			if (this.type === RatingEnum.EMOTION) {
				return this.twoEmotions ? 2 : 3;
			}

			return undefined;
		},

		hasAnswered(): boolean {
			return this.value !== -1;
		}
	},
	methods: {
		showAdditionalContent(value: number): void {
			const starsUnsatisfied = this.type === RatingEnum.STARS && value <= 3;
			const numberUnsatisfied = this.type === RatingEnum.NUMBER && value <= 7;

			const isEmotion = this.type === RatingEnum.EMOTION;
			const isEmotionLow = this.twoEmotions ? value < 2 : value < 3;
			const emotionUnsatisfied = isEmotion && isEmotionLow;

			if (starsUnsatisfied || numberUnsatisfied || emotionUnsatisfied) {
				this.displayAdditionalContent = true;
			}
		},

		setValue(value: number): void {
			this.internalValue = value;

			this.showAdditionalContent(value);
			this.$emit('change', value);
		}
	}
});
</script>
