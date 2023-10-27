import { describe, it, expect } from 'vitest'
import { DOMWrapper, mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import DataList from '../'
import { getDataList } from './fixtures'

const items = getDataList()

describe('DataList', () => {
	it('renders correctly', () => {
		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: items,
			},
		})

		const elExists = wrapper.find('.vd-data-list').exists()
		expect(elExists).toBe(true)

		// Check items exists
		const itemsExists = wrapper.find('.vd-data-list-item').exists()
		expect(itemsExists).toBe(true)

		const titleExists = wrapper.find('h4').exists()
		expect(titleExists).toBe(false)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a title', () => {
		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: items,
				listTitle: 'Informations',
			},
		})

		const elExists = wrapper.find('h4').exists()
		expect(elExists).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with an empty list', () => {
		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: [],
			},
		})

		// Check items does not exist
		const itemsExists = wrapper.find('.vd-data-list-item').exists()
		expect(itemsExists).toBe(false)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with an icon', () => {
		const listWithIcon = items

		// Add an action to the second item
		listWithIcon[1].icon = 'mdiTest'

		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: listWithIcon,
				icons: {
					mdiTest: 'test',
				},
			},
		})

		// Check items does not exist
		const itemsExists = wrapper.find('.vd-data-list-item .v-icon').exists()
		expect(itemsExists).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with a class', async () => {
		const listWithClass = items

		// Add a class to the second item
		listWithClass[1].class = 'custom-class'

		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: listWithClass,
			},
		})

		// Check that items now exist
		const itemsExists = wrapper
			.find('.vd-data-list-item.custom-class')
			.exists()

		expect(itemsExists).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders loading state correctly', async () => {
		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: items,
				loading: true,
				itemsNumberLoading: 3,
				headingLoading: true,
			},
		})

		// Check that items does not exist
		let itemsExists = wrapper.find('.vd-data-list-item').exists()
		expect(itemsExists).toBe(false)

		expect(wrapper).toMatchSnapshot()

		await wrapper.setProps({
			loading: false
		})

		// Check that items now exist
		itemsExists = wrapper.find('.vd-data-list-item').exists()
		expect(itemsExists).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with an action', async () => {
		const listWithAction = items

		// Add an action to the second item
		listWithAction[1].action = 'Edit'

		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: listWithAction,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('emits action event', async () => {
		const listWithAction = items

		// Add an action to the second item
		listWithAction[2].action = 'Edit'

		const wrapper = mount(DataList, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				items: listWithAction,
			},
		},)

		// Find the second item element
		const itemWithAction = wrapper.findAll('.vd-data-list-item').at(2)
		expect(itemWithAction?.exists()).toBe(true)

		const actionBtn = (itemWithAction as DOMWrapper<Element>).find('.vd-data-list-item-action-btn')
		expect(actionBtn.exists()).toBe(true)

		await actionBtn.trigger('click')

		expect(wrapper.emitted('click:item-action')).toEqual([[2]])
	})
})
