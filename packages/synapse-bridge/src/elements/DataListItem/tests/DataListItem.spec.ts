import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import DataListItem from '../'
import { defineComponent } from 'vue'

describe('DataListItem', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Test',
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a value', () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: 'Test',
				value: 'value',
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a number value', () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: 'Test',
				value: 123,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a NaN value', () => {
		const wrapper = shallowMount(DataListItem, {
			propsData: {
				label: 'Test',
				value: parseInt('test', 10),
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly a value with HTML as text', () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Name',
				value: 'Paul<br> Dupont',
			},
		})

		const elValue = wrapper.find('.vd-data-list-item-value span')

		expect(elValue.text()).toBe('Paul<br> Dupont')
		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly a value as plain HTML', () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Name',
				value: 'Paul<br> Dupont',
				renderHtmlValue: true,
			},
		})

		const elValue = wrapper.find('.vd-data-list-item-value span')

		expect(elValue.text()).toBe('Paul Dupont')
		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly value in a chip', () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Test',
				value: 'value',
				chip: true,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with an action', () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Test',
				action: 'Action',
			},
		})

		const actionBtn = wrapper.find('.vd-data-list-item-action-btn')

		expect(actionBtn.exists()).toBe(true)
		expect(wrapper).toMatchSnapshot()
	})

	it('emits click:action event when the action button is pressed', async () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Test',
				value: 'value',
				action: 'Action',
			},
		})

		const actionBtn = wrapper.find('.vd-data-list-item-action-btn')
		expect(actionBtn.exists()).toBe(true)

		await actionBtn.trigger('click')

		expect(wrapper.emitted('click:action')).toBeTruthy()
		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly in row mode', () => {
		const wrapper = shallowMount(DataListItem, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				label: 'Test',
				value: 'value',
				action: 'Action',
				row: true,
			},
		})

		const elExists = wrapper.find('.vd-row').exists()

		expect(elExists).toBe(true)
		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly in dark mode', () => {
		const WrapperComponent = defineComponent({
			template: `
				<v-theme-provider theme="dark">
					<DataListItem
						label="Test"
						value="value"
						action="Action"
					/>
				</v-theme-provider>
			`,
			components: {
				DataListItem,
			},
		})

		const wrapper = mount(WrapperComponent, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})
})
