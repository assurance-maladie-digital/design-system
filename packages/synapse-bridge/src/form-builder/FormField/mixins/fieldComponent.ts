import { defineComponent } from 'vue'
import type { PropType } from 'vue'

import type { Field, FieldValue, FieldOptions } from '../types'

import { deepCopy } from '@/helpers/deepCopy'
import { deepRemoveKeys } from '@/helpers/deepRemoveKeys'

export default defineComponent({
	props: {
		field: {
			type: Object as PropType<Field>,
			required: true,
		},
	},
	emits: ['update:modelValue'],
	computed: {
		fieldOptions(): FieldOptions | undefined {
			return this.field.fieldOptions
		},
	},
	methods: {
		async emitChangeEvent(value: FieldValue): Promise<void> {
			const fieldOptions = this.fieldOptions
				? this.clearErrorMessages(deepCopy(this.fieldOptions))
				: undefined

			const updatedField = {
				...this.field,
				fieldOptions,
				value,
			}

			await this.$nextTick() // Await to respect event order

			this.$emit('update:modelValue', updatedField)
		},

		clearErrorMessages(fieldOptions: FieldOptions): FieldOptions {
			return deepRemoveKeys(fieldOptions, 'errorMessages')
		},
	},
})
