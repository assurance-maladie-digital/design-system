<template>
	<VAutocomplete
		v-model="field.value"
		:items="field.items"
		v-bind="field.metadata"
		:search-input.sync="searchInput"
		@change="emitChangeEvent(field); searchInput=''"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FieldComponent from '../mixins/fieldComponent';

	/** Form field to select a value with autocomplete */
	@Component
	export default class AutocompleteField extends FieldComponent {
		searchInput: string | null= null;
	}
</script>
