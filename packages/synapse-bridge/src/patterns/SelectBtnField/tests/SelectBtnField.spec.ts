import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import SelectBtnField from '../SelectBtnField.vue'

describe('SelectBtnField', () => {
	it('renders correctly', () => {
		const wrapper = mount(SelectBtnField, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly with props', () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				hint: 'Test',
				items: [
					{
						text: 'Test',
						value: 'test',
					},
					{
						text: 'Test 2',
						value: '',
					},
					{
						text: 'Test 3',
						value: 'test3',
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('render correctly in multiple mode', () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				hint: 'Test',
				items: [
					{
						text: 'Test',
						value: 'test',
					},
					{
						text: 'Test 2',
						value: '',
					},
					{
						text: 'Test 3',
						value: 'test3',
					},
				],
				multiple: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('emits an update event when the value change in single mode', async () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				hint: 'Test',
				items: [
					{
						text: 'Test',
						value: 'test',
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('.v-btn').trigger('click')

		expect(wrapper.emitted()).toHaveProperty('update:modelValue')

		await wrapper.find('.v-btn').trigger('click')

		expect(wrapper.emitted('update:modelValue')).toEqual([['test'], [null]])
	})

	it(`emits an array of values when the value changes in multiple mode`, async () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				hint: 'Test',
				items: [
					{
						text: 'Test',
						value: 'test',
					},
					{
						text: 'Test 2',
						value: 'test2',
					},
					{
						text: 'Test 3',
						value: 'test3',
					},
				],
				multiple: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('li:nth-child(2) .v-btn').trigger('click')
		await wrapper.find('li:nth-child(3) .v-btn').trigger('click')
		await wrapper.find('li:nth-child(2) .v-btn').trigger('click')

		expect(wrapper.emitted('update:modelValue')).toEqual([
			[['test2']],
			[['test2', 'test3']],
			[['test3']],
		])
	})

	it(`display correctly with an error`, () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				hint: 'Test',
				items: [
					{
						text: 'Test',
						value: 'test',
					},
					{
						text: 'Test 2',
						value: 'test2',
					},
					{
						text: 'Test 3',
						value: 'test3',
					},
				],
				error: true,
				errorMessages: ['Test'],
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it(`clear the others values when defined to unique`, async () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				items: [
					{
						text: 'Test 1',
						value: 'test1',
					},
					{
						text: 'Test 2',
						value: 'test2',
					},
					{
						text: 'Other',
						value: 'other',
						unique: true,
					},
				],
				multiple: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('li:nth-child(1) .v-btn').trigger('click')
		await wrapper.find('li:nth-child(2) .v-btn').trigger('click')
		await wrapper.find('li:nth-child(3) .v-btn').trigger('click')
		await wrapper.find('li:nth-child(2) .v-btn').trigger('click')

		expect(wrapper.emitted('update:modelValue')).toEqual([
			[['test1']],
			[['test1', 'test2']],
			[['other']],
			[['test2']],
		])
	})

	it(`display correctly in dark mode with an error`, () => {
		const DarkMode = {
			template: `
				<v-app>
					<v-theme-provider theme="dark">
						<div>
							<SelectBtnField v-bind="props" />
						</div>
					</v-theme-provider>
				</v-app>
			`,
			components: {
				SelectBtnField,
			},
			data() {
				return {
					props: {
						label: 'Test',
						hint: 'Test',
						items: [
							{
								text: 'Test 1',
								value: 'test1',
							},
							{
								text: 'Test 2',
								value: 'test2',
							},
						],
						error: true,
						errorMessages: ['Test'],
						multiple: true,
						inline: true,
					},
				}
			},
		}

		const wrapper = mount(DarkMode, {
			global: {
				plugins: [vuetify],
			},
		})

		wrapper.find('li:nth-child(1) .v-btn').trigger('click')
		wrapper.find('li:nth-child(2) .v-btn').trigger('click')

		expect(wrapper.html()).toMatchSnapshot()
	})

	it(`display correctly with in dark mode with an hint`, () => {
		const DarkMode = {
			template: `
				<v-app>
					<v-theme-provider theme="dark">
						<div>
							<SelectBtnField v-bind="props" />
						</div>
					</v-theme-provider>
				</v-app>
			`,
			components: {
				SelectBtnField,
			},
			data() {
				return {
					props: {
						label: 'Test',
						hint: 'Test',
						items: [
							{
								text: 'Test 1',
								value: 'test1',
							},
							{
								text: 'Test 2',
								value: 'test2',
							},
						],
						multiple: true,
						inline: true,
					},
				}
			},
		}

		const wrapper = mount(DarkMode, {
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('do not allow to select an item when the readonly prop is defined', async () => {
		const wrapper = mount(SelectBtnField, {
			props: {
				label: 'Test',
				hint: 'Test',
				items: [
					{
						text: 'Test 1',
						value: 'test1',
					},
					{
						text: 'Test 2',
						value: 'test2',
					},
				],
				readonly: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		await wrapper.find('.v-btn').trigger('click')
		expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
	})
})
