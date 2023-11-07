import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import CookiesInformation from '../'

import { cookies } from '../../tests/fixtures'
import { TypeEnum } from '../TypeEnum'
import { RadioValuesEnum } from '../RadioValuesEnum'

describe('CookiesInformation', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(CookiesInformation, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				tableItems: cookies,
				type: TypeEnum.FUNCTIONAL,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly without items', () => {
		const wrapper = shallowMount(CookiesInformation, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				type: TypeEnum.FUNCTIONAL,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly when details is toggled', async () => {
		const wrapper = mount(CookiesInformation, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				tableItems: cookies,
				type: TypeEnum.FUNCTIONAL,
			},
		})

		const details = wrapper.find('details')
		details.element.open = true

		await details.trigger('toggle')

		expect(wrapper).toMatchSnapshot()
	})

	it('parses the value when a radio button is selected or unselected', async () => {
		const wrapper = shallowMount(CookiesInformation, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				tableItems: cookies,
				type: TypeEnum.FUNCTIONAL,
				modelValue: true,
			},
		})

		expect(wrapper.vm.parsedValue).toBe(RadioValuesEnum.ACCEPT)

		await wrapper.setProps({
			modelValue: false,
		})

		expect(wrapper.vm.parsedValue).toBe(RadioValuesEnum.REJECT)
	})

	it('emits change event when a radio button is selected', async () => {
		const wrapper = mount(CookiesInformation, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				tableItems: cookies,
				type: TypeEnum.FUNCTIONAL,
			},
		})

		await wrapper.find('[data-test-id="radio-group"]').trigger('change', {
			value: RadioValuesEnum.ACCEPT,
		})

		await wrapper.vm.$nextTick()

		expect(wrapper.emitted()).toHaveProperty('change')
	})
})
