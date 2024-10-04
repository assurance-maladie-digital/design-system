import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'

import NirField from '../'
import { vuetify } from '@tests/unit/setup'
import { locales } from '../locales'
import { defineComponent } from 'vue'
import { VForm } from 'vuetify/lib/components/index.mjs'

describe('NirField', () => {
	const nir = '195122B120005'
	const key = '29'
	const formattedNir = '1 95 12 2B 120 005'

	it('renders correctly', () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with 13 characters', () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with outlined prop', () => {
		const wrapper = mount(NirField, {
			propsData: {
				outlined: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a tooltip', () => {
		const wrapper = mount(NirField, {
			propsData: {
				tooltip: 'Information sur le NIR',
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('emits a change event when a correct NIR is entered in single field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const input = wrapper.find('.vd-number-field input')
		await input.setValue(nir)

		expect(wrapper.emitted()).toHaveProperty('update:modelValue')
		expect(wrapper.emitted('update:modelValue')?.[0][0]).toEqual(nir)
	})

	it('emits a change event when a correct NIR is entered in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		const keyField = wrapper.find('.vd-key-field input')

		await numberField.setValue(nir)
		await keyField.setValue(key)

		expect(wrapper.emitted()).toHaveProperty('update:modelValue')
		expect(wrapper.emitted('update:modelValue')?.[1][0]).toEqual(nir + key)
	})

	it('update the value when the nir prop is updated in single field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const input = wrapper.find<HTMLInputElement>('.vd-number-field input')
		await input.setValue('123')
		expect(input.element.value).toBe('1 23')

		await input.setValue(nir)
		expect(input.element.value).toBe(formattedNir)
	})

	it('update the value when the nir prop is updated in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')
		await numberField.setValue(nir)
		await keyField.setValue(key)

		expect(numberField.element.value).toBe(formattedNir)
		expect(keyField.element.value).toBe(key)
	})

	it('display an error when the fields are required and left empty', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
				required: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		const keyField = wrapper.find('.vd-key-field input')

		await numberField.trigger('click')
		await numberField.trigger('blur')

		await keyField.trigger('click')
		await keyField.trigger('blur')

		expect(wrapper.find('.vd-number-field').classes()).toContain(
			'v-input--error'
		)
		expect(wrapper.find('.vd-key-field').classes()).toContain(
			'v-input--error'
		)
	})

	it('update the value when the modelValue is set to null', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
				modelValue: nir + key,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')

		expect(numberField.element.value).toBe(formattedNir)
		expect(keyField.element.value).toBe(key)

		await wrapper.setProps({ modelValue: undefined })

		expect(numberField.element.value).toBe('')
		expect(keyField.element.value).toBe('')
	})

	it('not display the key field in single key mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.vm.isSingleField).toBe(true)
		expect(wrapper.find('.vd-key-field').exists()).toBe(false)
	})

	it('displays an error when an incorrect NIR is entered in single field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 13,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const input = wrapper.find('.vd-number-field input')
		await input.setValue('12345') // Enter an invalid NIR
		await input.trigger('blur')

		expect(wrapper.find('#number-field-errors').text()).toBe(
			locales.errorLengthNumber(13)
		)
	})

	it('displays an error when an incorrect NIR is entered in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		await numberField.setValue('12345') // Enter an invalid NIR
		await numberField.trigger('blur')

		expect(wrapper.find('#number-field-errors').text()).toBe(
			locales.errorLengthNumber(13)
		)
	})

	it('displays an error when an incorrect key is entered in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const keyField = wrapper.find('.vd-key-field input')
		await keyField.setValue('2') // Enter an invalid key
		await keyField.trigger('blur')

		expect(wrapper.find('#key-field-errors').text()).toBe(
			locales.errorLengthKey(2)
		)
	})

	it('displays an error when an incorrect NIR is set when updating the component modelValue', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
				modelValue: '',
			},
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.setProps({ modelValue: '12345' })

		expect(wrapper.find('#number-field-errors').text()).toBe(
			locales.errorLengthNumber(13)
		)
	})

	it('set the focus on the key field when the number field is filled in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')

		keyField.element.focus = vi.fn()

		await numberField.setValue(nir)
		await numberField.trigger('keydown', {
			key: '1',
			code: 'Digit1',
			keyCode: 49,
		})

		expect(keyField.element.focus).toHaveBeenCalled()
	})

	it('do not set the focus on the key field when the number field is filled in dual field mode there is a key modifier', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')

		keyField.element.focus = vi.fn()

		await numberField.setValue(nir)
		await numberField.trigger('keydown', {
			key: '1',
			code: 'Digit1',
			keyCode: 49,
			shiftKey: true,
		})

		expect(keyField.element.focus).not.toHaveBeenCalled()
	})

	it('set the focus on the number field when the key field is empty in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')

		numberField.element.focus = vi.fn()

		await keyField.trigger('keyup', {
			key: 'Backspace',
			code: 'Backspace',
			keyCode: 8,
		})

		expect(numberField.element.focus).toHaveBeenCalled()
	})

	it('do not set the focus on the number field when the key field is not empty', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')

		numberField.element.focus = vi.fn()

		await keyField.setValue('22')

		await keyField.trigger('keyup', {
			key: 'Backspace',
			code: 'Backspace',
			keyCode: 8,
		})

		expect(numberField.element.focus).not.toHaveBeenCalled()
	})
	it('does not display an error when the fields are not required and left empty', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
				required: false,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		const keyField = wrapper.find('.vd-key-field input')

		await numberField.trigger('click')
		await numberField.trigger('blur')

		await keyField.trigger('click')
		await keyField.trigger('blur')

		expect(wrapper.find('.vd-number-field').classes()).not.toContain(
			'v-input--error'
		)
		expect(wrapper.find('.vd-key-field').classes()).not.toContain(
			'v-input--error'
		)
	})

	it('does not render a tooltip when the tooltip prop is not provided', () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.find('VTooltip').exists()).toBe(false)
	})

	it('updates the v-model when a key is deleted', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const keyField = wrapper.find('.vd-key-field input')
		await keyField.setValue('22')
		await keyField.setValue('')

		const emittedValues = wrapper.emitted('update:modelValue')

		const lastEmittedValue = emittedValues?.pop()
		expect(lastEmittedValue).toEqual([''])
	})

	it('updates the v-model when a number is deleted', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		await numberField.setValue('1234567890123')
		await numberField.setValue('')

		const emittedValues = wrapper.emitted('update:modelValue')

		const lastEmittedValue = emittedValues?.pop()
		expect(lastEmittedValue).toEqual([''])
	})

	it('emit the correct values in dual field mode', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		const keyField = wrapper.find('.vd-key-field input')

		// Set the number and key values
		await numberField.setValue('1234567890123')
		await keyField.setValue('22')

		// Check the emitted event
		const emittedValues = wrapper.emitted('update:modelValue')
		const lastEmittedValue = emittedValues?.pop()
		expect(lastEmittedValue).toEqual(['123456789012322'])
	})

	it('emit the correct value when the key value is empty', async () => {
		const wrapper = mount(NirField, {
			propsData: {
				nirLength: 15,
			},
			global: {
				plugins: [vuetify],
			},
		})

		const numberField = wrapper.find('.vd-number-field input')
		const keyField = wrapper.find('.vd-key-field input')

		// Set the number value and leave the key value empty
		await numberField.setValue('1234567890123')
		await keyField.setValue('')

		// Check the emitted event
		const emittedValues = wrapper.emitted('update:modelValue')
		const lastEmittedValue = emittedValues?.pop()
		expect(lastEmittedValue).toEqual(['1234567890123'])
	})

	it('do not delete the key when the number is not completed', async () => {
		const TestComponent = defineComponent({
			components: { NirField },
			data() {
				return {
					modelValue: '',
				}
			},
			template: `
				<NirField
					v-model="modelValue"
					:nirLength="15"
				/>
			`,
		})
		const wrapper = mount(TestComponent, {
			global: {
				plugins: [vuetify],
			},
		})
		const NirFieldComponent = wrapper.findComponent(NirField)

		const numberField = wrapper.find<HTMLInputElement>(
			'.vd-number-field input'
		)
		const keyField = wrapper.find<HTMLInputElement>('.vd-key-field input')

		await numberField.setValue(formattedNir)
		await keyField.setValue(key)

		await numberField.setValue('1 95 12 2B')

		const lastEmittedValue =
			NirFieldComponent.emitted('update:modelValue')?.pop()
		expect(lastEmittedValue).toEqual(['195122B' + key])
		expect(numberField.element.value).toBe('1 95 12 2B')
		expect(keyField.element.value).toBe(key)
	})

	it('display the errors when the VForm wrapper is submitted', async () => {
		const TestComponent = defineComponent({
			components: {
				VForm,
				NirField,
			},
			template: `
				<VForm>
					<NirField required/>
				</VForm>
			`,
		})

		const wrapper = mount(TestComponent, {
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('form').trigger('submit')

		expect(wrapper.text()).toContain(locales.errorRequiredNumber)
		expect(wrapper.text()).toContain(locales.errorRequiredKey)
	})

	it('do not validate the key field in single field mode', async () => {
		const wrapper = mount(NirField, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: '1234567890123',
				nirLength: 13,
				required: true,
			},
		})

		await wrapper.setProps({ modelValue: '' })

		expect(wrapper.text()).toContain(locales.errorRequiredNumber)
		expect(wrapper.text()).not.toContain(locales.errorRequiredKey)
	});
})
