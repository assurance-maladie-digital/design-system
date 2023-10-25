import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import DataListLoading from '../'

describe('DataListLoading', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(DataListLoading)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a header', () => {
		const wrapper = shallowMount(DataListLoading, {
			propsData: {
				heading: true,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with more items', () => {
		const wrapper = shallowMount(DataListLoading, {
			propsData: {
				itemsNumber: 3,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly in row mode', () => {
		const wrapper = shallowMount(DataListLoading, {
			propsData: {
				row: true,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})
})
