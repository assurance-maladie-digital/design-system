import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import { customizable } from '../'

const DEFAULT_OPTIONS = {
	test: {
		a: 'a'
	}
}

const CUSTOM_OPTIONS = {
	test: {
		b: 'b'
	}
}

/** Create the test component */
function createTestComponent() {
	return defineComponent({
		mixins: [customizable(DEFAULT_OPTIONS)],
		template: '<div>{{ options.test }}</div>'
	})
}

export default defineComponent({
	name: 'TestComponent',
	extends: createTestComponent()
})

describe('customizable', () => {
	it('merges correctly default and custom options into a computed property', () => {
		const testComponent = createTestComponent()

		const wrapper = mount(testComponent, {
			props: {
				vuetifyOptions: CUSTOM_OPTIONS
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})
})
