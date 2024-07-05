<script lang="ts">
import { defineComponent } from 'vue'

import DatePicker from '@/patterns/DatePicker'

import FieldComponent from '../mixins/fieldComponent'

export default defineComponent({
	components: {
		DatePicker,
	},
	mixins: [FieldComponent],
	data() {
		return {
			oldValue: '',
		}
	},
	methods: {
		dateUpdated(e: string) {
			if (e !== this.oldValue) {
				this.oldValue = e
				this.emitChangeEvent(e)
			}
		},
	},
})
</script>

<template>
	<DatePicker
		v-bind="field.fieldOptions"
		:model-value="field.value"
		class="vd-form-input mt-4"
		@update:modelValue="dateUpdated"
		:vuetify-options="{
			...field.fieldOptions,
		}"
	/>
</template>
