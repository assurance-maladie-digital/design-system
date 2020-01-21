<template>
	<VSlider
		v-if="field.items"
		v-bind="field.metadata"
		color="accent"
		class="mt-5"
		:value="getIndex(field.value)"
		:thumb-label="thumbLabel"
		:tick-labels="thickLabels"
		:max="field.items.length - 1"
		@change="valueUpdated"
	>
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

	import FieldComponent from '../mixins/fieldComponent';
	import { FieldValue } from '../types';

	/** Choice field type slider*/
	@Component
	export default class ChoiceSliderField extends FieldComponent {
		/** Get the index of the selected item by value
		 *
		 * @param {FieldValue} value the current field value
		 * @returns {number} the index of the selected item, null if not found
		 */
		getIndex(value: FieldValue) {
			if(!this.field.items) {
				return null;
			}

			return this.field.items.findIndex(item => item.value === value);
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
			return this.field.metadata && this.field.metadata.thumbLabel;
		}

		/** The ticks labels */
		get labels() {
			return this.field.items && this.field.metadata ? this.field.items.map(item => item.text) : [];
		}

		valueUpdated(index: number) {
			let fieldValue = null;

			if (this.field.items) {
				fieldValue = this.field.items[index].value;
			}

			return this.emitChangeEvent(fieldValue);
		}

	}
</script>
