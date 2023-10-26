import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import CookieBanner from '../'

describe('CookieBanner', () => {
	it('renders correctly', () => {
		const wrapper = mount(CookieBanner, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly on small screens', () => {
		const wrapper = mount(CookieBanner, {
			global: {
				plugins: [vuetify],
			},
		})

		wrapper.vm.$vuetify.display.name = 'sm'

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('rejects cookies', async () => {
		const wrapper = mount(CookieBanner, {
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('[data-test-id="reject"]').trigger('click')

		expect(wrapper.emitted()).toHaveProperty('reject')
	})

	it('accepts cookies', async () => {
		const wrapper = mount(CookieBanner, {
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('[data-test-id="accept"]').trigger('click')

		expect(wrapper.emitted()).toHaveProperty('accept')
	})

	it('closes the dialog when the customize button is clicked', async () => {
		const wrapper = mount(CookieBanner, {
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('[data-test-id="customize"]').trigger('click')

		expect(wrapper.vm.active).toBeFalsy()
	})
})
