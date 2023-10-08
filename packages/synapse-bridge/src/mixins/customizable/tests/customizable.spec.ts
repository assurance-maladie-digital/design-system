import {
	describe,
	it,
	expect,
} from 'vitest'

import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import { customizable } from '..'

const DEFAULT_OPTIONS = {
	test: {
		a: 'a',
	},
}

const CUSTOM_OPTIONS = {
	test: {
		b: 'b',
	},
}

describe('customizable', () => {
	it('merges correctly default and custom options into a computed property', () => {
		const testComponent = defineComponent({
			mixins: [customizable(DEFAULT_OPTIONS)],
			template: '<div>{{ options.test }}</div>',
		})

		const wrapper = mount(testComponent, {
			props: {
				vuetifyOptions: CUSTOM_OPTIONS,
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
