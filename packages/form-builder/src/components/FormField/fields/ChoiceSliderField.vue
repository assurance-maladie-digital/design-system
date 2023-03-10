<template>
	<VSlider
		v-bind="options"
		:value="getIndex(choiceFieldValue)"
		:thumb-label="thumbLabel"
		:tick-labels="tickLabels"
		:max="items.length - 1"
		:type="undefined"
		:class="{ 'thumb-label': isThumbLabel }"
		:style="sliderStyles"
		:error-messages="errorMessages"
		color="primary"
		tick-size="6"
		track-color="grey"
		class="vd-choice-slider-field vd-form-input-xl"
		@change="valueUpdated"
	>
		<template
			v-if="thumbLabel"
			#thumb-label="{ value }"
		>
			{{ labels[value] }}
		</template>
	</VSlider>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';
	import { FieldValue } from '../types';

	import { convertToUnit } from '@cnamts/vue-dot/src/helpers/convertToUnit';
	import { IndexedObject } from '@cnamts/vue-dot/src/types';

	const MixinsDeclaration = mixins(ChoiceComponent);

	type ThumbLabelValue = boolean | string | undefined;

	@Component<ChoiceSliderField>({
		watch: {
			value: {
				handler(value: FieldValue): void {
					if (value === null) {
						this.valueUpdated(0);
					}
				},
				immediate: true
			}
		}
	})
	export default class ChoiceSliderField extends MixinsDeclaration {
		getIndex(value: FieldValue): number | null {
			if (!this.items) {
				return null;
			}

			const index = this.items.findIndex((item) => item.value === value);

			if (index === -1) {
				return null;
			}

			return index;
		}

		get labelMin(): string {
			if (this.options?.labelMin) {
				return this.options.labelMin as string;
			}

			// The default value is the first the label
			return this.labels[0];
		}

		get labelMax(): string {
			if (this.options?.labelMax) {
				return this.options.labelMax as string;
			}

			// The default value is the last the label
			return this.labels[this.labels.length - 1];
		}

		get thumbLabel(): ThumbLabelValue {
			return this.options?.thumbLabel as ThumbLabelValue;
		}

		get thumbSizePlaceholder(): string {
			let thumbSize = this.options?.thumbSize as number | string;

			if (this.isThumbLabel) {
				thumbSize = thumbSize || 32;
			}

			if (typeof thumbSize === 'string') {
				thumbSize = parseInt(thumbSize);
			}

			return convertToUnit(thumbSize) as string;
		}

		get sliderStyles(): IndexedObject {
			return {
				paddingTop: this.thumbSizePlaceholder
			};
		}

		get tickLabels(): string[] {
			return this.isThumbLabel ? [] : this.labels;
		}

		get isThumbLabel(): boolean {
			return Boolean(this.options?.thumbLabel);
		}

		get labels(): string[] {
			if (this.items && this.options) {
				const labels = this.items.map((item) => item.text);

				return labels;
			}

			return [];
		}

		valueUpdated(index: number): void {
			let fieldValue = null;

			if (this.items) {
				fieldValue = this.items[index].value;
			}

			this.emitChangeEvent(fieldValue);
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	// Increase min-height when using tick labels with hide-details
	// to make up for the additional space
	.vd-choice-slider-field:not(.thumb-label) {
		&.v-input--hide-details {
			min-height: 40px;
		}
	}

	.vd-choice-slider-field :deep() {
		.v-input__control {
			width: auto;
		}

		.v-slider__ticks-container--always-show .v-slider__tick {
			border-radius: 50%;
			background: #bdbdbd;

			&.v-slider__tick--filled {
				background: $vd-primary !important;
			}
		}

		&.theme--dark {
			.v-slider__ticks-container--always-show .v-slider__tick {
				background: #fff;
			}
		}
	}
</style>
