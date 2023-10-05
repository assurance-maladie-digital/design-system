import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import BackBtn from '../'

describe('BackBtn', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(BackBtn, {
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly in dark mode', () => {
		const wrapper = shallowMount(BackBtn, {
			props: {
				dark: true
			},
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
