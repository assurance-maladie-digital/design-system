import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import FormFieldList from '../'

import { addressFields } from './data/addressFields'

describe('FormFieldList', () => {
	it('renders correctly', () => {
		const wrapper = mount(
			{
				template:
					'<VApp><FormFieldList v-model="addressFields" listTitle="title" /></VApp>',
				data() {
					return {
						addressFields,
						title: 'Address Fields',
					}
				},
				components: {
					FormFieldList,
				},
			},
			{
				global: {
					plugins: [vuetify],
				},
			}
		)
		expect(wrapper).toMatchSnapshot()
	})

	it('emit a update:modelValue event when a field is updated', async () => {
		const wrapper = mount(
			{
				template:
					'<VApp><FormFieldList v-model="addressFields" listTitle="title" /></VApp>',
				data() {
					return {
						addressFields,
					}
				},
				components: {
					FormFieldList,
				},
			},
			{
				global: {
					plugins: [vuetify],
				},
			}
		)

		const input = wrapper.find('input')
		await input.setValue('123')
		const FormFieldListComponent = wrapper.findComponent(FormFieldList)
		expect(FormFieldListComponent.emitted()).toHaveProperty(
			'update:modelValue'
		)
	})

	it('emit a refresh event when a field is updated', async () => {
		const wrapper = mount(
			{
				template:
					'<VApp><FormFieldList v-model="addressFields" /></VApp>',
				data() {
					return {
						addressFields: {
							...addressFields,
							streetNumber: {
								dynamic: true,
								type: 'number',
								value: null,
								fieldOptions: {
									label: 'Numéro de voie',
									mask: '#####',
									variant: 'outlined',
								},
							},
						},
					}
				},
				components: {
					FormFieldList,
				},
			},
			{
				global: {
					plugins: [vuetify],
				},
			}
		)

		const input = wrapper.find('input')
		await input.setValue('123')
		const FormFieldListComponent = wrapper.findComponent(FormFieldList)

		expect(FormFieldListComponent.emitted()).toHaveProperty('refresh')
	})
})
