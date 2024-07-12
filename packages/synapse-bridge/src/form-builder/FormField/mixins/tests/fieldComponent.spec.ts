import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { defineComponent } from 'vue'

import type { Field } from '../../types'

import FieldComponent from '../fieldComponent'

const testField = {
	type: 'text',
	modelValue: null,
	fieldOptions: {
		label: 'Field',
		variant: 'outlined',
	},
}

/** Create the wrapper */
function createWrapper(field: Field) {
	const component = defineComponent({
		mixins: [FieldComponent],
		template: '<div />',
	})

	return shallowMount(component, {
		propsData: {
			field,
		},
	})
}

describe('fieldComponent', () => {
	it('emits change event', async () => {
		const wrapper = createWrapper(testField)

		wrapper.vm.emitChangeEvent(testField.modelValue)

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted('update:modelValue')).toBeTruthy()
	})

	it('emits change event without fieldOptions', async () => {
		const wrapper = createWrapper({
			...testField,
			fieldOptions: undefined,
		})

		wrapper.vm.emitChangeEvent(testField.modelValue)

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted('update:modelValue')).toBeTruthy()
	})
})
