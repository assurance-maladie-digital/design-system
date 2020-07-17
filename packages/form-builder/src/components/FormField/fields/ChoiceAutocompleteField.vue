<template>
	<VAutocomplete
		v-bind="options"
		:value="choiceValue"
		:items="items"
		:multiple="multiple"
		:search-input.sync="searchInput"
		@change="valueChanged"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	import { ChoiceValue } from '../types';

	const MixinsDeclaration = mixins(ChoiceComponent);

	/** Form field to select a value with autocomplete */
	@Component
	export default class ChoiceAutocompleteField extends MixinsDeclaration {
		searchInput: string | null = null;

		/**
		 * Clear the search input
		 * See https://github.com/vuetifyjs/vuetify/issues/5926
		 * for more informations
		 *
		 * @param {ChoiceValue} value The updated value
		 * @returns {void} Nothing
		 */
		valueChanged(value: ChoiceValue): void {
			this.searchInput = '';
			this.emitChoiceUpdated(value);
		}
	}
</script>
