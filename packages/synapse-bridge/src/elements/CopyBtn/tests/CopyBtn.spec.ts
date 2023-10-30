import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest'
import { mount, shallowMount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import CopyBtn from '../'

describe('CopyBtn', () => {
	const copy = vi.fn()

	beforeEach(() => {
		const navigator = {
			clipboard: {
				writeText: copy
			}
		} as unknown as Navigator

		vi.spyOn(window, 'navigator', 'get').mockReturnValue(navigator)

		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it('renders correctly', () => {
		const wrapper = shallowMount(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test'
			},
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('copies the text to the clipboard', async () => {
		const wrapper = mount(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test'
			},
			global: {
				plugins: [vuetify]
			}
		})

		await wrapper.find('[data-test-id="copy-btn"]').trigger('click')

		expect(copy).toHaveBeenCalledWith('test')

		await wrapper.setProps({
			textToCopy: () => 'function test'
		})

		await wrapper.find('[data-test-id="copy-btn"]').trigger('click')

		expect(copy).toHaveBeenCalledWith('function test')
	})

	it('shows a tooltip when the text is copied', async () => {
		const wrapper = mount(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test'
			},
			global: {
				plugins: [vuetify]
			}
		})

		await wrapper.find('[data-test-id="copy-btn"]').trigger('click')

		expect(wrapper.vm.tooltip).toBeTruthy()

		vi.runAllTimers()
		expect(wrapper.vm.tooltip).toBeFalsy()
	})

	it('does not show a tooltip when the text is copied but hide-tooltip is true', async () => {
		const wrapper = mount(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test',
				hideTooltip: true
			},
			global: {
				plugins: [vuetify]
			}
		})

		await wrapper.find('[data-test-id="copy-btn"]').trigger('click')

		expect(wrapper.vm.tooltip).toBeFalsy()
	})
})
