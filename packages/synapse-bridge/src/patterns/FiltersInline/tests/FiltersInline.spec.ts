import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'
import FiltersInline from '../'
import { locales } from '../locales'
import { defineComponent } from 'vue'
import { VTextField } from 'vuetify/lib/components/index.mjs'

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

	it ('immediately emit an update:modelValue event when a filter is added', async () => {
		const testComponent = defineComponent({
			components: {
				FiltersInline,
				VTextField,
			},
			template: `
				<div>
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
				</div>
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
			}
		})

		await wrapper.find('button').trigger('click')
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
