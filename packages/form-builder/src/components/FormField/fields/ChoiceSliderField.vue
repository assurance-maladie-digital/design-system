<template>
	<VSlider
		v-bind="options"
		:value="getIndex(choiceFieldValue)"
		:thumb-label="thumbLabel"
		:tick-labels="thickLabels"
		:max="items.length - 1"
		color="accent"
		tick-size="6"
		track-color="grey lighten-1"
		class="vd-choice-slider-field vd-form-input-xl"
		@change="valueUpdated"
	>
		<template
			v-if="isThumbLabel"
			#prepend
		>
			{{ labelMin }}
		</template>

		<template
			v-if="isThumbLabel"
			#append
		>
			{{ labelMax }}
		</template>

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

	const MixinsDeclaration = mixins(ChoiceComponent);

	/** Choice field type slider */
	@Component
	export default class ChoiceSliderField extends MixinsDeclaration {
		/** Get the index of the selected item by value
		 *
		 * @param {FieldValue} value The current field value
		 * @returns {number|null} The index of the selected item, null if not found
		 */
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

		get labelMin(): string | unknown {
			// Check if there is a custom labelMin prop in metadata
			if (this.options?.labelMin) {
				return this.options.labelMin;
			}

			// The default value is the first the label
			return this.labels[0];
		}

		get labelMax(): unknown {
			// Check if there is a custom labelMax prop in metadata
			if (this.options?.labelMax) {
				return this.options.labelMax;
			}

			// The default value is the last the label
			return this.labels[this.labels.length - 1];
		}

		get thumbLabel(): string | boolean {
			return this.isThumbLabel ? 'always' : false;
		}

		/** The ticks labels (when we don't want the thumb label) */
		get thickLabels(): string[] {
			return this.isThumbLabel ? [] : this.labels;
		}

		/**  Are we in thumb label mode */
		get isThumbLabel(): boolean {
			return Boolean(this.options?.thumbLabel);
		}

		/** The ticks labels */
		get labels(): string[] {
			if (this.items && this.options) {
				const labels = this.items.map((item) => item.text);

				return labels;
			}

			return [];
		}

		/**
		 * Emit the value of the item's index selected
		 *
		 * @param {number} index The index of the selected item
		 */
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
	@import '@cnamts/vue-dot/src/tokens';

	.vd-choice-slider-field ::v-deep {
		.v-input__control {
			width: auto;
		}

		.v-slider__ticks-container--always-show .v-slider__tick {
			border-radius: 50%;
			background: #bdbdbd;
			&.v-slider__tick--filled {
				background: $vd-accent !important;
			}
		}

		&.theme--dark {
			.v-slider__ticks-container--always-show .v-slider__tick {
				background: #fff;
			}
		}
	}
</style>
