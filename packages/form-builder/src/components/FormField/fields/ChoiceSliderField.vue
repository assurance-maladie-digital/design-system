<template>
	<VSlider
		:value="getIndex(choiceValue)"
		v-bind="options"
		:thumb-label="thumbLabel"
		:tick-labels="thickLabels"
		:max="items.length - 1"
		track-color="grey lighten-1"
		color="accent"
		class="mt-5"
		@change="valueUpdated"
	>
		<template
			v-if="isThumbLabel"
			#prepend
		>
			<span>
				{{ labelMin }}
			</span>
		</template>

		<template
			v-if="isThumbLabel"
			#append
		>
			<span>
				{{ labelMax }}
			</span>
		</template>

		<template
			v-if="thumbLabel"
			#thumb-label="{ value }"
		>
			<span>
				{{ labels[value] }}
			</span>
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

			return this.items.findIndex((item) => item.value === value);
		}

		get labelMin(): unknown {
			// Check if there is a custom labelMin prop in metadata
			if (this.options?.labelMin) {
				return this.options.labelMin;
			}

			// The default value is the first the label
			return this.labels[0];
		}

		get labelMax(): unknown {
			// Check if there is a custom labelMax prop in metadata
			if (this.options && this.options.labelMax) {
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
			return !this.isThumbLabel ? this.labels : [];
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

			this.emitChoiceUpdated(fieldValue);
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