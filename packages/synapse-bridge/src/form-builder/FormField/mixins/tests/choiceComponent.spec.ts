import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import { defineComponent } from 'vue'

import ChoiceComponent from '../choiceComponent'
import type { ChoiceFieldValue, FieldOptions, FieldItem } from '../../types'

interface TestComponent {
	modelValue?: ChoiceFieldValue
	options?: FieldOptions
	multiple?: boolean
	items: FieldItem[]
}

const testField: TestComponent = {
	items: [
		{
			text: 'Test 1',
			value: 'value1',
		},
		{
			text: 'Test 2',
			value: 42,
		},
		{
			text: 'Test alone 1',
			value: 'alone1',
			alone: true,
		},
		{
			text: 'Test alone 2',
			value: 'alone2',
			alone: true,
		},
		{
			text: 'Test null value',
			value: null,
		},
	],
}

/** Create the wrapper */
function createWrapper(field: TestComponent) {
	const testComponent = defineComponent({
		mixins: [ChoiceComponent],
		template: '<div />',
	})

	return shallowMount(testComponent, {
		props: {
			...field,
		},
	})
}

describe('choiceComponent', () => {
	it('selects a not null item value', async () => {
		const wrapper = createWrapper(testField)

		wrapper.vm.toggleItem(testField.items[0])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		expect(event[0][0]).toEqual(testField.items[0].value)
	})

	it('selects a null item value', async () => {
		const wrapper = createWrapper(testField)

		wrapper.vm.toggleItem(testField.items[4])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		expect(event[0][0]).toEqual(null)
	})

	it('unselects an item', async () => {
		const wrapper = createWrapper({
			...testField,
			modelValue: testField.items[0].value,
		})

		wrapper.vm.toggleItem(testField.items[0])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		expect(event[0][0]).toEqual(null)
	})

	it('transforms the initial value into an array in multiple mode', async () => {
		const wrapper = createWrapper({
			...testField,
			modelValue: testField.items[0].value,
			multiple: true,
		})

		expect(wrapper.vm.choiceFieldValue).toEqual([testField.items[0].value])
	})

	it('selects multiple items in multiple mode', async () => {
		const wrapper = createWrapper({
			...testField,
			multiple: true,
		})

		wrapper.vm.toggleItem(testField.items[0])
		wrapper.vm.toggleItem(testField.items[1])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		// Both buttons should be selected
		expect(event[1][0]).toEqual([
			testField.items[0].value,
			testField.items[1].value,
		])
	})

	it('unselects one "multiple" item in multiple mode', async () => {
		const wrapper = createWrapper({
			...testField,
			modelValue: [testField.items[0].value, testField.items[1].value],
			multiple: true,
		})

		// Unselect the first button
		wrapper.vm.toggleItem(testField.items[0])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		// Second button should stay selected
		expect(event[0][0]).toEqual([testField.items[1].value])
	})

	it('changes selected "alone" item in multiple mode', async () => {
		const wrapper = createWrapper({
			...testField,
			modelValue: [testField.items[3].value],
			multiple: true,
		})

		// Select the first button
		wrapper.vm.toggleItem(testField.items[0])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		// The default alone selected shouldn't be selected
		expect(event[0][0]).toEqual([testField.items[0].value])
	})

	it('selects an "alone" item from a multiple selection', async () => {
		const wrapper = createWrapper({
			...testField,
			modelValue: [testField.items[0].value, testField.items[1].value],
			multiple: true,
		})

		wrapper.vm.toggleItem(testField.items[2])

		await wrapper.vm.$nextTick()

		const event = wrapper.emitted('update:modelValue') || []

		expect(event[0][0]).toEqual([testField.items[2].value])
	})

	it('does not selects an item with null value in multiple mode', async () => {
		const wrapper = createWrapper({
			...testField,
			modelValue: [testField.items[0].value],
			multiple: true,
		})

		// Select a button with a null value
		wrapper.vm.toggleItem(testField.items[4])

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted('update:modelValue')).toBeFalsy()
	})
})
