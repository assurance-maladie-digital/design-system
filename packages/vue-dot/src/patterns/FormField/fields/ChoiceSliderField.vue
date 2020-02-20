<template>
	<VSlider
		:value="getIndex(choiceValue)"
		v-bind="metadata"
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
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';
	import { FieldValue } from '../types';

	/** Choice field type slider */
	@Component
	export default class ChoiceSliderField extends ChoiceComponent {
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

		get labelMin() {
			// Check if there is a custom labelMin prop in metadata
			if (this.metadata && this.metadata.labelMin) {
				return this.metadata.labelMin;
			}

			// The default value is the first the label
			return this.labels[0];
		}

		get labelMax() {
			// Check if there is a custom labelMax prop in metadata
			if (this.metadata && this.metadata.labelMax) {
				return this.metadata.labelMax;
			}

			// The default value is the last the label
			return this.labels[this.labels.length - 1];
		}

		get thumbLabel() {
			return this.isThumbLabel ? 'always' : false;
		}

		/** The ticks labels (when we don't want the thumb label) */
		get thickLabels() {
			return !this.isThumbLabel ? this.labels : [];
		}

		/**  Are we in thumb label mode */
		get isThumbLabel() {
			return this.metadata && this.metadata.thumbLabel;
		}

		/** The ticks labels */
		get labels() {
			if (this.items && this.metadata) {
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
		valueUpdated(index: number) {
			let fieldValue = null;

			if (this.items) {
				fieldValue = this.items[index].value;
			}

			this.emitChoiceUpdated(fieldValue);
		}
	}
</script>
