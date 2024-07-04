import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import FieldMap from '../fieldMap'

/** Create the wrapper */
function createWrapper() {
	const component = defineComponent({
		mixins: [FieldMap],
		template: '<div />',
	})

	return shallowMount(component)
}

describe('FieldMap', () => {
	it('contains the map of fields and their components', () => {
		const wrapper = createWrapper()

		expect(wrapper.vm.fieldMap).toMatchSnapshot()
	})

	it('gets a field component', () => {
		const wrapper = createWrapper()

		expect(typeof wrapper.vm.getField('text')).toBe('string')
	})
})
