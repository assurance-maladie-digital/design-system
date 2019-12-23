<template>
	<VSlider
		v-model="field.value"
		class="mt-5"
		v-bind="field.metadata"
		@change="emitChangeEvent(field)"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to enter text */
	@Component
	export default class SliderField extends FieldComponent {}
</script>
