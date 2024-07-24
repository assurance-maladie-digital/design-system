import { describe, it, expect } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'
import FiltersInline from '../'
import { locales } from '../locales'
import {type FilterItem} from '@/mixins/filterable/types'
import { VTextField } from 'vuetify/lib/components/index.mjs'
import { defineComponent } from 'vue'

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

	it ('immediately emit an update:modelValue event when a filter is added', async () => {
		const testComponent = defineComponent({
			components: {
				FiltersInline,
				VTextField,
			},
			template: `
				<FiltersInline v-model="filters">
					<template #name="{ attrs }">
						<VTextField
							v-bind="attrs"
							label="Nom"
						/>
					</template>
					<template #profession="{ attrs }">
						<VTextField
							v-bind="attrs"
							label="Profession"
						/>
					</template>
				</FiltersInline>
			`,

			data() {
				return {
					filters: [
						{
							name: 'name',
							label: 'Nom'
						},
						{
							name: 'profession',
							label: 'Profession'
						}
					],
				}
			},
		})

		const wrapper = mount(testComponent, {
			global: {
				plugins: [vuetify],
				stubs: {
					VMenu: { template: '<div class="vmenu"><slot></slot></div>' },
					SlideYTransition: { template: '<div class="slide-y-transition"><slot></slot></div>'}
				},
			}
		})

		const FilterInlineComponent = wrapper.findComponent(FiltersInline)
		const TextInput = wrapper.findComponent(VTextField)

		await TextInput.setValue('John Doe')

		expect(FilterInlineComponent.emitted('update:modelValue')?.[0]).toEqual([
			[
				{
					name: 'name',
					label: 'Nom',
					value: 'John Doe',
				}, {
					name: 'profession',
					label: 'Profession',
				}
			],
		])
	});
})

describe('FiltersInline locales', () => {
	it('should return the correct locale', () => {
		expect(locales.badgeLabel(0)).toMatchSnapshot()
		expect(locales.badgeLabel(1)).toMatchSnapshot()
		expect(locales.badgeLabel(2)).toMatchSnapshot()
	})
})
