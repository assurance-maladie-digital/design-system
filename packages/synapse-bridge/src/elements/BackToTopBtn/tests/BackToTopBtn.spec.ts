import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '../../../../tests/unit/setup'

import BackToTopBtn from '../'

describe('BackToTopBtn', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(BackToTopBtn, {
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
