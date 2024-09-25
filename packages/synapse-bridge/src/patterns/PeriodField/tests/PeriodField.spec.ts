import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PeriodField from '../PeriodField.vue'
import { vuetify } from '@tests/unit/setup'

describe('PeriodField', () => {
	it('should render the component', () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: {
					from: '14/11/2005',
					to: '23/12/2005',
				},
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
		expect(wrapper.findAll('input')[0].element.value).toBe('14/11/2005')
		expect(wrapper.findAll('input')[1].element.value).toBe('23/12/2005')
	})

	it('should update the text field value when the modelValue is updated', async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: {
					from: null,
					to: null,
				},
			},
		})

		expect(wrapper.findAll('input')[0].element.value).toBe('')
		expect(wrapper.findAll('input')[1].element.value).toBe('')

		await wrapper.setProps({
			modelValue: {
				from: '12/12/1995',
				to: '05/01/1996',
			},
		})

		expect(wrapper.findAll('input')[0].element.value).toBe('12/12/1995')
		expect(wrapper.findAll('input')[1].element.value).toBe('05/01/1996')
	})

	it('emit a event when the fields are updated', async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: {
					from: null,
					to: null,
				},
			},
		})

		const startField = wrapper.findAll('input')[0]
		await startField.trigger('focus')
		await startField.setValue('12/12/1995')
		await startField.trigger('blur')

		expect(wrapper.emitted('update:modelValue')).toEqual([
			[
				{
					from: '12/12/1995',
					to: null,
				},
			],
		])

		const endField = wrapper.findAll('input')[1]
		await endField.trigger('focus')
		await endField.setValue('20/12/1995')
		await endField.trigger('blur')

		expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([
			{
				from: '12/12/1995',
				to: '20/12/1995',
			},
		])
	})

	it('do not set a `from` older that `true`', async () => {
		const wrapper = mount(PeriodField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: {
					from: null,
					to: null,
				},
			},
		})

		const endField = wrapper.findAll('input')[1]
		await endField.trigger('focus')
		await endField.setValue('20/12/1995')
		await endField.trigger('blur')

		const startField = wrapper.findAll('input')[0]
		await startField.trigger('focus')
		await startField.setValue('21/12/1995')
		await startField.trigger('blur')

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([
			{
				from: '21/12/1995',
				to: '21/12/1995',
			},
		])
	})
})
