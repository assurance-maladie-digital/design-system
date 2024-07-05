<script lang="ts">
import { defineComponent } from 'vue'

import ChoiceComponent from '../mixins/choiceComponent'

export default defineComponent({
	mixins: [ChoiceComponent],
	computed: {
		formattedItems: function () {
			return this.items.map((item) => {
				return {
					title: item.title || item.text,
					value: item.value,
				}
			})
		},
	},
})
</script>

<template>
	<VSelect
		v-bind="options"
		:model-value="choiceFieldValue"
		:items="formattedItems"
		:multiple="multiple"
		:type="undefined"
		:error-messages="errorMessages"
		class="vd-form-input"
		@update:model-value="emitChangeEvent($event)"
	/>
</template>
