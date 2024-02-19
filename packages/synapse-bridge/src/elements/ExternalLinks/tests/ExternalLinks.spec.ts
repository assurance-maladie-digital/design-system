import { describe, it, expect } from 'vitest'
import { shallowMount, mount } from '@vue/test-utils'
import { vuetify } from '@tests/unit/setup'
import { locales } from '../locales'

import ExternalLinks from '../'

describe('ExternalLinks', () => {
	it('renders correctly', () => {
		const wrapper = shallowMount(ExternalLinks, {
			propsData: {
				position: 'top left',
				items: [
					{
						text: 'ameli.fr',
						href: 'https://www.ameli.fr',
					},
					{
						text: 'Github',
						href: 'https://www.github.com',
					},
					{
						text: 'Twitter',
						href: 'https://www.twitter.com',
					}
				],
				btnText: 'External Links',
				nudgeTop: '0px',
				nudgeBottom: '0px',
				fixed: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('opens the menu when the button is clicked', async () => {
		const wrapper = mount(ExternalLinks, {
			propsData: {
				position: 'top left',
				items: [
					{
						text: 'ameli.fr',
						href: 'https://www.ameli.fr',
					},
					{
						text: 'Github',
						href: 'https://www.github.com',
					},
					{
						text: 'Twitter',
						href: 'https://www.twitter.com',
					},
				],
			},
			global: {
				plugins: [vuetify],
			},
		})

		const button = wrapper.find('button')
		await button.trigger('click')

		expect(wrapper.vm.$data.menu).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly without items', async() => {
		const wrapper = mount(ExternalLinks, {
			propsData: {
				position: 'top left',
				items: [],
			},
			global: {
				plugins: [vuetify],
			},
		})

		const button = wrapper.find('button')
		await button.trigger('click')

		expect(wrapper.text()).toContain(locales.noData)
	})

	it('renders correctly with fixed prop', async () => {
		const wrapper = mount(ExternalLinks, {
			propsData: {
				position: 'bottom right',
				items: [
					{
						text: 'ameli.fr',
						href: 'https://www.ameli.fr',
					},
					{
						text: 'Github',
						href: 'https://www.github.com',
					},
					{
						text: 'Twitter',
						href: 'https://www.twitter.com',
					},
				],
				fixed: true,
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()

		const button = wrapper.find('button')
		await button.trigger('click')

		expect(wrapper).toMatchSnapshot()
	})

	it('slides on hover or focus', async () => {
		const wrapper = mount(ExternalLinks, {
			propsData: {
				position: 'bottom right',
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()

		const button = wrapper.find('button')

		// set hover in mouseenter
		await button.trigger('mouseenter')
		expect(wrapper).toMatchSnapshot()

		// remove hover mouseleave
		await button.trigger('mouseleave')
		expect(wrapper).toMatchSnapshot()

		// set hover in focusin
		await button.trigger('focusin')
		expect(wrapper).toMatchSnapshot()

		// remove hover focusout
		await button.trigger('focusout')
		expect(wrapper).toMatchSnapshot()
	})
})
