<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import EmotionPicker from './EmotionPicker';
import NumberPicker from './NumberPicker';
import StarsPicker from './StarsPicker';
import AlertWrapper from '@/patterns/AlertWrapper/AlertWrapper.vue';
import { RATING_ENUM_VALUES, RatingEnum } from './RatingMixin';
import { propValidator } from '@/helpers/propValidator';
import { locales } from './locales';
import { AlertTypeEnum } from "../AlertWrapper/AlertTypeEnum";
export default defineComponent({
	components: {
		EmotionPicker,
		NumberPicker,
		StarsPicker,
		AlertWrapper
	},
	emits: ["update:modelValue"],
	props: {
		type: {
			type: String,
			required: true,
			validator: (value: string) => propValidator('type', RATING_ENUM_VALUES, value)
		},
		label: {
			type: String as PropType<string | null>,
			default: null
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
		hideAlert: {
			type: Boolean,
			default: false
		},
		modelValue: {
			type: Number,
			default: -1
		}
	},
	data() {
		return {
			locales,
			AlertTypeEnum: AlertTypeEnum,
			internalValue: -1,
			displayAdditionalContent: false,
		};
	},
	computed: {
		ratingComponent(): string {
			if (this.type === RatingEnum.EMOTION) {
				return 'EmotionPicker';
			} else if (this.type === RatingEnum.NUMBER) {
				return 'NumberPicker';
			} else {
				return 'StarsPicker';
			}
		},
		length(): number | undefined {
			if (this.type === RatingEnum.EMOTION) {
				return this.twoEmotions ? 2 : 3;
			}
			return undefined;
		},
		hasAnswered(): boolean {
			return this.modelValue !== -1;
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
			this.$emit('update:modelValue', value);
		}
	}
});
</script>

<template>
	<div class="vd-rating-picker">
		<component
			:is="ratingComponent"
			:label="label"
			:length="length"
			:readonly="readonly"
			:item-labels="itemLabels || undefined"
			:model-value="internalValue"
			@update:modelValue="setValue"
		>
			<template #label>
				<slot name="label">
					{{ label }}
				</slot>
			</template>
		</component>

		<template v-if="hasAnswered">
			<AlertWrapper
				v-if="!hideAlert"
				:class="{ 'mb-4': displayAdditionalContent }"
				outlined
				:type="AlertTypeEnum.SUCCESS"
				class="mt-4"
			>
				{{ locales.thanks }}
			</AlertWrapper>

			<slot v-if="displayAdditionalContent" />
		</template>
	</div>
</template>
