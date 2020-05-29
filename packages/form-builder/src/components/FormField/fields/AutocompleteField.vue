<template>
	<VAutocomplete
		v-bind="field.metadata"
		:value="field.value"
		:items="field.items"
		:search-input.sync="searchInput"
		class="vd-form-input"
		@change="valueChanged"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';
	import { FieldValue } from '../types';

	/** Form field to select a value with autocomplete */
	@Component
	export default class AutocompleteField extends FieldComponent {
		searchInput: string | null = null;

		/**
		 * Clear the search input
		 *
		 * @see https://github.com/vuetifyjs/vuetify/issues/5926
		 *
		 * @param {FieldValue} value The updated value
		 * @returns {void}
		 */
		valueChanged(value: FieldValue): void {
			this.searchInput = '';
			this.emitChangeEvent(value);
		}
	}
</script>
