<template>
	<VTextField
		v-mask="mask"
		v-bind="field.metadata"
		:value="field.value"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';

	/** FieldGroup field to enter a number (requires a mask) */
	@Component
	export default class NumberField extends FieldComponent {
		get mask() {
			return this.field.metadata ? this.field.metadata.mask : '';
		}
	}
</script>
