import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import ErrorPage from '../'

describe('ErrorPage', () => {
	it('renders correctly', () => {
		const wrapper = mount(ErrorPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				pageTitle: 'Error',
				message: 'Error message',
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	// mobile version
	it('renders correctly on mobile', () => {
		const wrapper = mount(ErrorPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				pageTitle: 'Error',
				message: 'Error message',
			},
		})

		wrapper.vm.$vuetify.display.name = 'sm'

		expect(wrapper.html()).toMatchSnapshot()
	})
})
