<template>
	<VAutocomplete
		v-bind="options"
		:value="choiceFieldValue"
		:items="items"
		:multiple="multiple"
		:search-input.sync="searchInput"
		:type="undefined"
		:error-messages="errorMessages"
		class="vd-form-input"
		@change="valueUpdated"
	/>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { ChoiceComponent } from '../mixins/choiceComponent';

	import { ChoiceFieldValue } from '../types';

	const MixinsDeclaration = mixins(ChoiceComponent);

	@Component
	export default class ChoiceAutocompleteField extends MixinsDeclaration {
		searchInput: string | null = null;

		// Clear the search input @see https://github.com/vuetifyjs/vuetify/issues/5926
		valueUpdated(value: ChoiceFieldValue): void {
			this.searchInput = '';
			this.emitChangeEvent(value);
		}
	}
</script>
