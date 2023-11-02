import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import CookiesTable from '../'

import { cookies } from '../../tests/fixtures'

describe('CookiesTable', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(CookiesTable, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: cookies,
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
