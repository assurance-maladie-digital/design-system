import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'
import FormField from '../../FormField.vue'

describe('ChoiceSliderField', () => {
	it('should render correctly', () => {
		const wrapper = mount(FormField, {
			props: {
				modelValue: {
					title: 'Combien de jours par semaine souhaitez-vous travailler ?',
					type: 'range',
					value: [0, 'should be removed', 6] as any,
					max: 6,
					min: 0,
				},
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('render correctly in multiple mode', () => {
		const wrapper = mount(FormField, {
			props: {
				modelValue: {
					title: 'Combien de jours par semaine souhaitez-vous travailler ?',
					type: 'range',
					value: null,
					max: 6,
					min: 0,
					fieldOptions: {
						color: 'red',
					},
				},
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})
})
