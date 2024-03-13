import { describe, it, expect, vi, beforeEach } from 'vitest'
import { VueWrapper, DOMWrapper, mount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import { filePromise } from './data/filePromise.ts';
import DownloadBtn from '../';


describe('DownloadBtn', () => {
	let wrapper: VueWrapper<typeof DownloadBtn>
	let element: DOMWrapper<Element>
	beforeEach(() => {
		vi.spyOn(DownloadBtn.methods, 'download')
		vi.spyOn(DownloadBtn.methods, 'addNotification')

		wrapper = mount(DownloadBtn, {
			props: {
				filePromise
			},
			global: {
				plugins: [vuetify],
			},
		})
		element = wrapper.find('[data-testid="download-btn"]')
	})

	it('renders correctly', async () => {
		expect(DownloadBtn).toBeTruthy()

		const elExists = element.exists()
		expect(elExists).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('call download method', async () => {
		expect(wrapper.vm).toBeTruthy()
		expect(wrapper.vm.download).toBeTruthy()

		expect(DownloadBtn.methods.download).toHaveBeenCalledTimes(0)
		await element.trigger('click')
		expect(DownloadBtn.methods.download).toHaveBeenCalledTimes(1)
	})

	it('emit error event', async () => {
		const filePromise = () => Promise.reject(new Error('Error'))
		await wrapper.setProps({filePromise})

		await element.trigger('click')
		expect(wrapper.emitted('error')).toBeTruthy()
	})

	it('with slots', async () => {
		const slot = 'Download'
		wrapper = mount(DownloadBtn, {
			props: {
				filePromise
			},
			slots: {
				default: slot
			},
			global: {
				plugins: [vuetify],
			},
		})

		expect(wrapper).toMatchSnapshot()
	})
})
