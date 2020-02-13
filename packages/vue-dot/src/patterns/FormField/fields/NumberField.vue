<template>
	<VTextField
		v-mask="mask"
		v-bind="field.fieldOptions"
		:value="field.value"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	/** Form field to enter a number (requires a mask) */
	@Component
	export default class NumberField extends FieldComponent {
		get mask() {
			return this.field.fieldOptions ? this.field.fieldOptions.mask : '';
		}
	}
</script>
