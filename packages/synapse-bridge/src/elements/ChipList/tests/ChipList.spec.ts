import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import ChipList from '../'

describe('ChipList', () => {
	it('renders correctly without items', () => {
		const wrapper = shallowMount(ChipList, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly with items', () => {
		const wrapper = shallowMount(ChipList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{ text: 'Chip 1', value: 'chip1' },
					{ text: 'Chip 2', value: 'chip2' },
					{ text: 'Chip 3', value: 'chip3' },
				],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it ('shows overflow button when chips overflow', () => {
		const wrapper = mount(ChipList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{ text: 'Chip 1', value: 'chip1' },
					{ text: 'Chip 2', value: 'chip2' },
					{ text: 'Chip 3', value: 'chip3' },
					{ text: 'Chip 4', value: 'chip4' },
					{ text: 'Chip 5', value: 'chip5' },
				],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('emits remove event when chip is removed', async () => {
		const wrapper = mount(ChipList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{ text: 'Chip 1', value: 'chip1' },
					{ text: 'Chip 2', value: 'chip2' },
					{ text: 'Chip 3', value: 'chip3' },
				],
			},
		})

		await wrapper.find('.v-chip__close').trigger('click')

		expect(wrapper.emitted('remove')).toBeTruthy()
	})

	it('emits reset event when reset button is clicked', async () => {
		const wrapper = mount(ChipList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [
					{ text: 'Chip 1', value: 'chip1' },
					{ text: 'Chip 2', value: 'chip2' },
					{ text: 'Chip 3', value: 'chip3' },
				],
			},
		})

		await wrapper.find('[data-test-id="reset-btn"]').trigger('click')

		expect(wrapper.emitted('reset')).toBeTruthy()
	})
})
