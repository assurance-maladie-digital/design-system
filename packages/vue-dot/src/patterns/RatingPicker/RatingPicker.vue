<template>
	<div class="vd-rating-picker">
		<form>
			<component
				:is="ratingComponent"
				:label="label"
				:length="length"
				:readonly="hasAnswered || readonly"
				:item-labels="itemLabels || undefined"
				:value="internalValue"
				@input="setValue"
			/>
		</form>

		<template v-if="hasAnswered">
			<VAlert
				:class="{ 'mb-0': !displayAdditionalContent }"
				outlined
				type="success"
				class="mt-4"
			>
				{{ locales.thanks }}
			</VAlert>

			<slot v-if="displayAdditionalContent" />
		</template>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import EmotionPicker from './EmotionPicker';
	import NumberPicker from './NumberPicker';
	import StarsPicker from './StarsPicker';

	import { RATING_ENUM_VALUES, RatingEnum } from './RatingMixin';

	import { propValidator } from '../../helpers/propValidator';

	import { locales } from './locales';

	const Props = Vue.extend({
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
	});

	const MixinsDeclaration = mixins(Props);

	@Component<RatingPicker>({
		components: {
			EmotionPicker,
			NumberPicker,
			StarsPicker
		},
		model: {
			prop: 'value',
			event: 'change'
		},
		watch: {
			value: {
				handler(value: number): void {
					this.internalValue = value;
					this.hasAnswered = value !== -1;
				},
				immediate: true
			}
		}
	})
	export default class RatingPicker extends MixinsDeclaration {
		locales = locales;

		internalValue = -1;
		hasAnswered = false;
		displayAdditionalContent = false;

		ratingComponentMapping = {
			[RatingEnum.EMOTION]: 'EmotionPicker',
			[RatingEnum.STARS]: 'StarsPicker',
			[RatingEnum.NUMBER]: 'NumberPicker'
		};

		get ratingComponent(): string {
			return this.ratingComponentMapping[this.type];
		}

		get length(): number | undefined {
			if (this.type === RatingEnum.EMOTION) {
				return this.twoEmotions ? 2 : 3;
			}

			return undefined;
		}

		showAdditionalContent(value: number): void {
			const starsUnsatisfied = this.type === RatingEnum.STARS && value <= 3;
			const numberUnsatisfied = this.type === RatingEnum.NUMBER && value <= 7;

			const isEmotion = this.type === RatingEnum.EMOTION;
			const isEmotionLow = this.twoEmotions ? value < 2 : value < 3;
			const emotionUnsatisfied = isEmotion && isEmotionLow;

			if (starsUnsatisfied || numberUnsatisfied || emotionUnsatisfied) {
				this.displayAdditionalContent = true;
			}
		}

		setValue(value: number): void {
			this.internalValue = value;
			this.hasAnswered = true;

			this.showAdditionalContent(value);

			this.$emit('change', value);
		}
	}
</script>
