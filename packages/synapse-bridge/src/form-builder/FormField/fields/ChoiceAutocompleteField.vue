<script lang="ts">
import { defineComponent } from 'vue'

import ChoiceComponent from '../mixins/choiceComponent'

export default defineComponent({
	mixins: [ChoiceComponent],
	emits: ['update:modelValue'],
})
</script>

<template>
	<VAutocomplete
		v-bind="options"
		:model-value="choiceFieldValue"
		:items="items"
		item-title="text"
		item-value="value"
		:multiple="multiple"
		:type="undefined"
		:error-messages="errorMessages"
		class="vd-form-input"
		@update:modelValue="emitChangeEvent"
	/>
</template>
