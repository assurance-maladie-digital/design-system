<template>
	<VAutocomplete
		v-bind="field.fieldOptions"
		:value="field.value"
		:items="field.items"
		:multiple="field.multiple"
		:search-input.sync="searchInput"
		class="vd-form-input"
		@change="valueChanged"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { FieldComponent } from '../mixins/fieldComponent';
	import { FieldValue } from '../types';

	const MixinsDeclaration = mixins(FieldComponent);

	/** Form field to select a value with autocomplete */
	@Component
	export default class AutocompleteField extends MixinsDeclaration {
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
