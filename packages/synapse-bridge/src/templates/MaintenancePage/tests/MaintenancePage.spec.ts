import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import MaintenancePage from '../'

describe('MaintenancePage', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(MaintenancePage)

		expect(wrapper.html()).toMatchSnapshot()
	})
})
