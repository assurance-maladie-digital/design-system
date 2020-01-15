<template>
	<VAutocomplete
		v-bind="field.metadata"
		:value="field.value"
		:items="field.items"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to select a value with autocomplete */
	@Component
	export default class AutocompleteField extends FieldComponent {}
</script>
