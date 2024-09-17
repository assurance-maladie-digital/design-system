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
				dateFormat: 'DD/MM/YYYY',
				dateFormatReturn: 'YYYY-MM-DD',
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
				dateFormat: 'DD/MM/YYYY',
				dateFormatReturn: 'YYYY-MM-DD',
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
				dateFormat: 'DD/MM/YYYY',
				dateFormatReturn: 'DD/MM/YY',
			},
		})

		expect(wrapper.find('input').element.value).toBe('21/12/2020')

		await wrapper.setProps({ modelValue: '29/01/26' })
		expect(wrapper.find('input').element.value).toBe('29/01/2026')

		await wrapper.setProps({ modelValue: '01/01/01' })
		expect(wrapper.find('input').element.value).toBe('01/01/2001')
	});

	it('should emit the end date when the startDate prop is set', async () => {
		const wrapper = mount(DatePickerField, {
			global: {
				plugins: [vuetify],
				stubs: ['slide-y-transition'],
			},
			props: {
				modelValue: '19/05/1995',
				startDate: '1995-05-19',
				dateFormat: 'DD/MM/YYYY',
				dateFormatReturn: 'DD/MM/YYYY',
			}
		})

		const input = wrapper.find('input')

		expect(input.element.value).toBe('19/05/1995')

		await input.trigger('focus')
		await input.setValue('17/06/1995')
		await input.trigger('blur')

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['17/06/1995'])
	})
})
