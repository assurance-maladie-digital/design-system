<script lang="ts">
import { defineComponent } from "vue";

import { ChoiceComponent } from '../mixins/choiceComponent';

import { ChoiceFieldValue } from '../types';

export default defineComponent({
	mixins: [ChoiceComponent],
	emits: ['change'],
	data() {
		return {
			searchInput: null as string | null
		};
	},
	methods: {
		/**
		 * Clear the search input
		 * @see https://github.com/vuetifyjs/vuetify/issues/5926
		 */
		valueUpdated(value: ChoiceFieldValue): void {
			this.searchInput = '';
			this.emitChangeEvent(value);
		}
	}
});
</script>

<template>
	<VAutocomplete
		v-bind="options"
		:model-value="choiceFieldValue"
		:items="items"
		:multiple="multiple"
		:search-input.sync="searchInput"
		:type="undefined"
		:error-messages="errorMessages"
		class="vd-form-input"
		@change="valueUpdated"
	/>
</template>
