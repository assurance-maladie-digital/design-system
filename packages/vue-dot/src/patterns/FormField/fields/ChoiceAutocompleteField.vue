<template>
	<VAutocomplete
		v-bind="metadata"
		:value="choiceValue"
		:items="items"
		:search-input.sync="searchInput"
		@change="valueChanged"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	import { ChoiceValue } from '../types';

	/** Form field to select a value with autocomplete */
	@Component
	export default class ChoiceAutocompleteField extends ChoiceComponent {
		searchInput: string | null = null;

		/**
		 * Clear the search input
		 * See https://github.com/vuetifyjs/vuetify/issues/5926
		 * for more informations
		 *
		 * @param {ChoiceValue} value The updated value
		 * @returns {void} Nothing
		 */
		valueChanged(value: ChoiceValue) {
			this.searchInput = '';
			this.emitChoiceUpdated(value);
		}
	}
</script>
