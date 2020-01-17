<template>
	<VSlider
		v-if="field.items"
		color="accent"
		:value="getIndex(field.value)"
		class="mt-5"
		v-bind="field.metadata"
		:thumb-label="thumbLabel"
		:tick-labels="thickLabels"
		:max="field.items.length -1"
		@change="valueChanged"
	>
		<template
			v-if="thumbLabel"
			#thumb-label="props"
		>
			<span>
				{{ labels[props.value] }}
			</span>
		</template>
	</VSlider>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';
	import { FieldValue } from '../types';

	/** Form field to enter text */
	@Component
	export default class ChoiceSliderField extends FieldComponent {
		/** get the index of the selected item by value */
		getIndex(value: FieldValue) {
			if(!this.field.items) return false;

			return this.field.items.findIndex(item => item.value === value);
		}

		get thumbLabel() {
			return this.isThumbLabel ? 'always' : false;
		}

		/** compute the ticks labels when we dont want the thumb label */
		get thickLabels() {
			return !this.isThumbLabel ? this.labels : [];
		}

		/** check if we are in thumb or tick label mode */
		get isThumbLabel() {
			return this.field.metadata && this.field.metadata.thumbLabel ? true : false;
		}

		/** compute the ticks labels */
		get labels() {
			return this.field.items && this.field.metadata ? this.field.items.map(item => item.text) : [];
		}

		valueChanged(index: number) {
			return this.emitChangeEvent(this.field && this.field.items ? this.field.items[index].value : null);
		}

	}
</script>
