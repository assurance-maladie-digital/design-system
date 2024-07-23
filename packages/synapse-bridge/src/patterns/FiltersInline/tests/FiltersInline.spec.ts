import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'
import FiltersInline from '../'
import { locales } from '../locales'
import {type FilterItem} from '@/mixins/filterable/types'

describe('FiltersInline', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [
					{
						name: 'name',
						label: 'Nom',
					},
				],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly with an active filter', () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [
					{
						name: 'name',
						label: 'Nom',
						value: 'John Doe',
					},
				],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly with multiple active filters', () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [
					{
						name: 'name',
						label: 'Nom',
						value: 'John Doe',
					},
					{
						name: 'profession',
						label: 'Profession',
						value: ['Infirmer', 'Pharmacien'],
					},
				],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('should emit an update:modelValue event when a filter is added', () => {
		const wrapper = shallowMount(FiltersInline, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				modelValue: [
					{
						name: 'name',
						label: 'Nom',
					},
				],
			},
		})

		const filter: FilterItem = {
			name: 'New Filter',
			value: 'new-filter',
		}

		// Simulate adding a new filter
		wrapper.vm.filters.push(filter)

		wrapper.vm.updateValue()

		expect(wrapper.emitted('update:modelValue')).toEqual([
			[
				[
					{
						name: 'name',
						label: 'Nom',
					},
					filter,
				],
			],
		])
	})
})

describe('FiltersInline locales', () => {
	it('should return the correct locale', () => {
		expect(locales.badgeLabel(0)).toMatchSnapshot()
		expect(locales.badgeLabel(1)).toMatchSnapshot()
		expect(locales.badgeLabel(2)).toMatchSnapshot()
	})
})
