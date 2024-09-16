import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import DatePickerField from '../DatePickerField.vue'
import { vuetify } from '@tests/unit/setup'

describe('DatePickerField', () => {
	it('should render correctly', async () => {
		const wrapper = mount(DatePickerField, {
			global: {
				plugins: [vuetify],
			},
			props: {
				modelValue: '2021-01-01',
				dateFormat: 'dd/MM/yyyy',
				dateFormatReturn: 'yyyy-MM-dd',
				label: 'User birthday',
			},
		})
		expect(wrapper.html()).toContain('User birthday')
		expect(wrapper.html()).toMatchSnapshot()

		await wrapper.find('.v-icon--clickable').trigger('click')
		expect(wrapper.find('.dp__instance_calendar').exists()).toBe(true)
		await wrapper.find('.v-icon--clickable').trigger('click')
		expect(wrapper.find('.dp__instance_calendar').exists()).toBe(false)
	})

	it("it should emit the date in 'dateFormatReturn' format", async () => {
		const wrapper = mount(DatePickerField, {
			global: {
				plugins: [vuetify],
				stubs: ['slide-y-transition'],
			},
			props: {
				modelValue: '2021-01-01',
				dateFormat: 'dd/MM/yyyy',
				dateFormatReturn: 'yyyy-MM-dd',
			},
		})

		const input = wrapper.find('input')

		await input.trigger('focus')
		await input.setValue('21/01/2021')
		await input.trigger('blur')
		expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['2021-01-21'])

		await input.trigger('focus')
		await input.setValue('12/04/2030')
		await input.trigger('blur')
		expect(wrapper.emitted()['update:modelValue'][1]).toEqual(['2030-04-12'])
	})

	it('should update the value when the modelValue prop changes', async () => {
		const wrapper = mount(DatePickerField, {
			global: {
				plugins: [vuetify],
				stubs: ['slide-y-transition'],
			},
			props: {
				modelValue: '21/12/20',
				dateFormat: 'dd/MM/yyyy',
				dateFormatReturn: 'dd/MM/yy',
			},
		})

		expect(wrapper.find('input').element.value).toBe('21/12/2020')

		await wrapper.setProps({ modelValue: '29/01/26' })
		expect(wrapper.find('input').element.value).toBe('29/01/2026')

		await wrapper.setProps({ modelValue: '01/01/01' })
		expect(wrapper.find('input').element.value).toBe('01/01/2001')
	});
})
