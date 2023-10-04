import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '../../../../tests/unit/setup'

import CopyBtn from '../'

describe('CopyBtn', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: () => 'test'
			},
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
