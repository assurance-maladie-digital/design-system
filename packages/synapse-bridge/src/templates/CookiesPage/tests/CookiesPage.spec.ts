import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import CookiesPage from '../'
import { TypeEnum } from '../CookiesInformation/TypeEnum'
import { cookies, cookiesList } from './fixtures'
import { VForm } from '@/types'
import CookiesInformation from '../CookiesInformation'

describe('CookiesPage', () => {
	it('renders correctly', () => {
		const wrapper = mount(CookiesPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: cookiesList,
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('sets global preferences', async () => {
		const wrapper = mount(CookiesPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: cookiesList,
			},
		})

		await wrapper.find('[data-test-id="reject-all"]').trigger('click')

		expect(wrapper.vm.preferences).toStrictEqual({
			[TypeEnum.FUNCTIONAL]: false,
			[TypeEnum.ANALYTICS]: false,
		})

		await wrapper.find('[data-test-id="accept-all"]').trigger('click')

		expect(wrapper.vm.preferences).toStrictEqual({
			[TypeEnum.FUNCTIONAL]: true,
			[TypeEnum.ANALYTICS]: true,
		})
	})

	it('updates preferences when CookiesInformation is updated', async () => {
		const wrapper = mount(CookiesPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: cookiesList,
			},
		})

		const cookiesInformation = wrapper.findAllComponents(CookiesInformation)

		cookiesInformation[1].vm.$emit('update:modelValue', true)
		cookiesInformation[2].vm.$emit('update:modelValue', false)

		expect(wrapper.vm.preferences).toStrictEqual({
			[TypeEnum.FUNCTIONAL]: true,
			[TypeEnum.ANALYTICS]: false,
		})
	})

	it('filters preferences', () => {
		const wrapper = mount(CookiesPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: {
					[TypeEnum.ANALYTICS]: cookies,
				},
			},
		})

		expect(wrapper.vm.filteredPreferences).toStrictEqual({
			[TypeEnum.ANALYTICS]: null,
		})
	})

	it('emits submit event if all preferences are set', async () => {
		const wrapper = mount(CookiesPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: cookiesList,
			},
		});

		const form = wrapper.vm.$refs.form as VForm

		form.validate = () => Promise.resolve({ valid: false })
		await wrapper.vm.submitForm()

		expect(wrapper.emitted()).not.toHaveProperty('submit');

		form.validate = () => Promise.resolve({ valid: true })
		await wrapper.vm.submitForm()

		expect(wrapper.emitted()).toHaveProperty('submit')
	})
})
