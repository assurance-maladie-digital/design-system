import { describe, it, expect, vi, beforeEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import consola from 'consola'

import FooterWrapper from '../'

describe('FooterWrapper', () => {
	const spy = vi.fn()

	beforeEach(() => {
		consola.mockTypes(() => spy)
	})

	it('renders correctly', () => {
		const wrapper = shallowMount(FooterWrapper, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
		expect(spy).toHaveBeenCalledWith(
			'FooterWrapper is deprecated since v2.2.0, use FooterBar instead.'
		)
	})
})
