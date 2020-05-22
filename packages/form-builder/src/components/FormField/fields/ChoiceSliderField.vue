<template>
	<VSlider
		v-if="field.items"
		v-bind="field.metadata"
		:value="getIndex(field.value)"
		:thumb-label="isThumbLabel"
		:tick-labels="thickLabels"
		:max="field.items.length - 1"
		color="accent"
		tick-size="6"
		track-color="grey lighten-1"
		class="vd-choice-slider-field vd-form-input-xl"
		@change="valueUpdated"
	>
		<template
			v-if="isThumbLabel"
			#thumb-label="{ value }"
		>
			{{ labels[value] }}
		</template>
	</VSlider>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';
	import { FieldValue } from '../types';

	/** Choice field type slider */
	@Component
	export default class ChoiceSliderField extends FieldComponent {
		/** Get the index of the selected item by value
		 *
		 * @param {FieldValue} value The current field value
		 * @returns {number|null} The index of the selected item, null if not found
		 */
		getIndex(value: FieldValue): number | null {
			if (!this.field.items) {
				return null;
			}

			const index = this.field.items.findIndex((item) => item.value === value);

			if (index === -1) {
				return null;
			}

			return index;
		}

		/** The ticks labels (when we don't want the thumb label) */
		get thickLabels() {
			return this.isThumbLabel ? [] : this.labels;
		}

		/**  Are we in thumb label mode */
		get isThumbLabel() {
			return Boolean(this.field.metadata?.thumbLabel);
		}

		/** The ticks labels */
		get labels() {
			if (this.field.items && this.field.metadata) {
				const labels = this.field.items.map((item) => item.text);

				return labels;
			}

			return [];
		}

		/**
		 * Emit the value of the item's index selected
		 *
		 * @param {number} index The index of the selected item
		 */
		valueUpdated(index: number) {
			let fieldValue = null;

			if (this.field.items) {
				fieldValue = this.field.items[index].value;
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
