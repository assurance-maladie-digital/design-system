import { describe, it, expect } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import { defineComponent } from 'vue'

import { Widthable } from '../'

function createTestComponent() {
	return defineComponent({
		mixins: [Widthable],
		template: '<div />',
	})
}

describe('Widthable', () => {
	it('computes the default styles', () => {
		const testComponent = createTestComponent()
		const wrapper = shallowMount(testComponent)

		expect(wrapper.vm.widthStyles).toMatchSnapshot()
	})

	it('computes the styles when min-width is defined', () => {
		const testComponent = createTestComponent()
		const wrapper = shallowMount(testComponent, {
			propsData: {
				minWidth: '512px',
			},
		})

		expect(wrapper.vm.widthStyles).toMatchSnapshot()
	})

	it('computes the styles when max-width is defined', () => {
		const testComponent = createTestComponent()
		const wrapper = shallowMount(testComponent, {
			propsData: {
				maxWidth: '512px',
			},
		})

		expect(wrapper.vm.widthStyles).toMatchSnapshot()
	})
})
