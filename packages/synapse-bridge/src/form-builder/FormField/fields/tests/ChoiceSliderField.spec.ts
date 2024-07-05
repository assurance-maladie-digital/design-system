import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ChoiceSliderField from '../ChoiceSliderField.vue'
import { vuetify } from '@tests/unit/setup'

describe('ChoiceSliderField', () => {
	it('should render correctly', () => {
		const wrapper = mount(ChoiceSliderField, {
			props: {
				items: [
					{
						text: 'S',
						value: 0,
					},
					{
						text: 'M',
						value: 1,
					},
					{
						title: 'Autre',
						value: 'autre',
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('render correctly in multiple mode', () => {
		const wrapper = mount(ChoiceSliderField, {
			props: {
				items: [
					{
						text: 'S',
						value: 0,
					},
					{
						text: 'M',
						value: 1,
					},
					{
						title: 'Autre',
						value: 'autre',
					},
				],
				multiple: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('should toggle the item', async () => {
		const wrapper = mount(ChoiceSliderField, {
			props: {
				items: [
					{
						text: 'S',
						value: 0,
					},
					{
						text: 'M',
						value: 1,
					},
					{
						title: 'Autre',
						value: 'autre',
					},
				],
				options: {
					label: 'Classic field',
					variant: 'outlined',
					labelMin: 'Min',
					labelMax: 'Max',
					thumbLabel: true,
					thumbSize: '24',
				},
				modelValue: 0,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
