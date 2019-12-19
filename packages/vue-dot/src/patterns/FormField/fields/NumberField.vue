<template>
	<VTextField
		v-model="field.value"
		v-mask="field.mask"
		v-bind="field.metadata"
		@change="emitChangeEvent(field)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to enter a number (requires a mask) */
	@Component
	export default class NumberField extends FieldComponent {}
</script>
