import { describe, it, expect, vi, afterEach } from 'vitest'
import { shallowMount } from '@vue/test-utils'

import ContextualMenu from '../'

describe('ContextualMenu', () => {
	const mockRoute = {
		hash: '#example-1'
	}

	const mockRouter = {
		replace: vi.fn()
	}

	const mocks = {
		$route: mockRoute,
		$router: mockRouter,
	}

	afterEach(() => {
		vi.restoreAllMocks()
	})

	it('renders correctly with items', () => {
		const wrapper = shallowMount(ContextualMenu, {
			global: {
				mocks
			},
			propsData: {
				items: [
					{
						text: 'Titre 1',
						hash: '#example-1',
					},
					{
						text: 'Titre 2',
						hash: '#example-2',
					},
				],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('renders correctly without items', () => {
		const wrapper = shallowMount(ContextualMenu, {
			global: {
				mocks,
			},
		})

		expect(wrapper).toMatchSnapshot()
	})

	it('sets hash', () => {
		const wrapper = shallowMount(ContextualMenu, {
			global: {
				mocks
			},
			propsData: {
				items: [
					{
						text: 'Titre 1',
						hash: '#example-1',
					},
					{
						text: 'Titre 2',
						hash: '#example-2',
					},
				],
			},
		})

		wrapper.vm.setHash('#example-2')

		expect(mockRouter.replace).toHaveBeenCalledTimes(1)
		expect(mockRouter.replace).toHaveBeenCalledWith({
			hash: '#example-2',
			path: undefined,
		})
	})

	it('does not sets hash if hash is equal to current hash', () => {
		const wrapper = shallowMount(ContextualMenu, {
			global: {
				mocks
			},
			propsData: {
				items: [
					{
						text: 'Titre 1',
						hash: '#example-1',
					},
					{
						text: 'Titre 2',
						hash: '#example-2',
					},
				],
			},
		})

		wrapper.vm.setHash('#example-1')

		expect(mockRouter.replace).not.toHaveBeenCalled()
	})

	it('sets hash from default value', () => {
		shallowMount(ContextualMenu, {
			global: {
				mocks
			},
			propsData: {
				items: [
					{
						text: 'Titre 1',
						hash: '#example-1',
					},
					{
						text: 'Titre 2',
						hash: '#example-2',
					},
				],
				modelValue: '#example-2',
			},
		})

		expect(mockRouter.replace).toHaveBeenCalledTimes(1)
		expect(mockRouter.replace).toHaveBeenCalledWith({
			hash: '#example-2',
			path: undefined,
		})
	})
})
