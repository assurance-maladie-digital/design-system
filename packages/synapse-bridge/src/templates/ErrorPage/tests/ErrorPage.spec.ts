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

	it('renders correctly with undefined route', () => {
		const wrapper = mount(ErrorPage, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				pageTitle: 'Error',
				message: 'Error message',
				btnHref: 'https://google.com',
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

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
