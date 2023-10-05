import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import PageContainer from '../'

describe('PageContainer', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(PageContainer, {
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly with spacing class', () => {
		const wrapper = shallowMount(PageContainer, {
			props: {
				spacing: 'ma-4'
			},
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
