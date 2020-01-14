<template>
	<div v-if="field.items">
		<!-- select type slider -->
		<VSlider
			v-if="field.metadata && field.metadata.slider"
			:value="field.items.findIndex(item => item.value === field.value)"
			class="mt-5"
			v-bind="field.metadata"
			:tick-labels="field.metadata && !field.metadata.thumbLabel ? field.items.map(item => item.text) : undefined"
			:max="field.items.length -1"
			@change="emitChangeEvent({ ...field, value : field.items[$event].value })"
		/>
		<VSelect
			v-else
			v-model="field.value"
			v-bind="field.metadata"
			:items="field.items"
			@change="emitChangeEvent(field)"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to select a value from a list */
	@Component
	export default class SelectField extends FieldComponent {}
</script>
