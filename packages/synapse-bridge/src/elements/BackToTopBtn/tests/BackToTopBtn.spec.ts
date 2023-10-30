import { describe, it, expect, vi, afterEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'

import BackToTopBtn from '../'

describe('BackToTopBtn', () => {
	afterEach(() => {
		vi.restoreAllMocks()
	})

	it('renders correctly', () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify]
			}
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly on mobile', () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			}
		})

		wrapper.vm.$vuetify.display.name = 'sm'

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('renders correctly when nudgeBottom and nudgeRight are set to invalid values', () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				nudgeBottom: '',
				nudgeRight: '',
			},
		})

		expect(wrapper.html()).toMatchSnapshot()
	})

	it('computes the target selector correctly with the target prop', () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				target: 'test',
			},
		})

		expect(wrapper.vm.targetSelector).toBe('#test')
	})

	it('shows the button when the user scrolls down', async () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
		})

		vi.spyOn(window, 'scrollY', 'get').mockReturnValue(500)

		wrapper.vm.onScroll({
			currentTarget: window,
		} as unknown as MouseEvent)

		expect(wrapper.vm.showBtn).toBeTruthy()
	})

	it('shows the button when the user scrolls down and the target is a custom element', async () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
		})

		wrapper.vm.onScroll({
			currentTarget: {
				scrollTop: 500,
			},
		} as unknown as MouseEvent)

		expect(wrapper.vm.showBtn).toBeTruthy()
	})

	it('scrolls to the top when the button is clicked', async () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
		})

		const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})

		await wrapper.find('.v-btn').trigger('click')

		expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
	})

	it('scrolls to the top when the button is clicked and the target is a custom element', async () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				target: 'test',
			},
		})

		const scrollToSpy = vi.fn()

		vi.spyOn(document, 'getElementById').mockReturnValue({
			scrollTo: scrollToSpy,
		} as unknown as HTMLElement)

		await wrapper.find('.v-btn').trigger('click')

		expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
	})

	it('scrolls to the top when the button is clicked and the target is a custom element that does not exist', async () => {
		const wrapper = mount(BackToTopBtn, {
			global: {
				plugins: [vuetify],
			},
			propsData: {
				target: 'test',
			},
		})

		const scrollToSpy = vi.spyOn(window, 'scrollTo').mockImplementation(() => {})

		vi.spyOn(document, 'getElementById').mockReturnValue(null)

		await wrapper.find('.v-btn').trigger('click')

		expect(scrollToSpy).toHaveBeenCalledWith(0, 0)
	})
})
