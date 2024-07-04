<script lang="ts">
import { defineComponent } from 'vue'

import RangeField from '@/patterns/RangeField'

import FieldComponent from '../mixins/fieldComponent'

export default defineComponent({
	components: {
		RangeField,
	},
	emits: ['update:modelValue'],
	mixins: [FieldComponent],
	computed: {
		value() {
			return Array.isArray(this.field.value)
				? this.field.value.filter((el) => !isNaN(el))
				: null
		},
	},
})
</script>

<template>
	<RangeField
		v-bind="field.fieldOptions"
		:min="field.min"
		:max="field.max"
		:model-value="value"
		:color="field.fieldOptions?.color ?? 'primary'"
		@update:modelValue="emitChangeEvent"
	/>
</template>
