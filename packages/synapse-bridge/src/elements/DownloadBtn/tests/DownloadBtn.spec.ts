import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { VueWrapper, DOMWrapper, mount } from '@vue/test-utils';
import { vuetify, createNotificationStore } from '@tests/unit/setup';

import { filePromise, filePromiseError, filePromiseNoHeaders } from './data/filePromise.ts';
import DownloadBtn from '../';
import { StateEnum } from "@/constants/enums/StateEnum.ts";
import { downloadFile } from "@/functions/downloadFile";


describe('DownloadBtn', () => {
	let wrapper: VueWrapper<typeof DownloadBtn>
	let element: DOMWrapper<Element>
	beforeEach(() => {
		vi.spyOn(DownloadBtn.methods, 'getFileInfo')
		vi.spyOn(DownloadBtn.methods, 'download')
		vi.spyOn(DownloadBtn.methods, 'notifyUser')

		wrapper = mount(DownloadBtn, {
			props: {
				filePromise
			},
			global: {
				plugins: [vuetify, createNotificationStore()]
			}
		})
		element = wrapper.find('[data-testid="download-btn"]')
		global.URL.createObjectURL = vi.fn()
		global.URL.revokeObjectURL = vi.fn()
	})
	afterEach(() => {
		wrapper.unmount()
		vi.restoreAllMocks()
	});

	it('renders correctly', async () => {
		expect(DownloadBtn).toBeTruthy()

		const elExists = element.exists()
		expect(elExists).toBe(true)

		expect(wrapper).toMatchSnapshot()
	})

	it('works correctly', async () => {
		expect(wrapper.vm).toBeTruthy()
		expect(wrapper.vm.download).toBeTruthy()

		expect(wrapper.vm.state).toBe(StateEnum.IDLE)
		await element.trigger('click')
		expect(wrapper.vm.state).toBe(StateEnum.RESOLVED)
		expect(DownloadBtn.methods.download).toHaveBeenCalledTimes(1)
		expect(DownloadBtn.methods.getFileInfo).toHaveBeenCalledTimes(1)
	})

	it('emit error event', async () => {
		await wrapper.setProps({
			filePromise: filePromiseError
		})

		expect(wrapper.emitted('error')).toBeFalsy()
		expect(wrapper.vm.state).toBe(StateEnum.IDLE)
		await element.trigger('click')
		expect(wrapper.vm.state).toBe(StateEnum.REJECTED)
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

	it('with notification', async () => {
		await wrapper.setProps({notification: true})

		await element.trigger('click')
		expect(DownloadBtn.methods.notifyUser).toHaveBeenCalledTimes(1)
	})

	it('with fallbackFilename', async () => {
		const filename = 'test'
		await wrapper.setProps({fallbackFilename: filename})
		await wrapper.setProps({filePromise: filePromiseNoHeaders})

		await element.trigger('click')
		expect(DownloadBtn.methods.download).toHaveBeenCalledTimes(1)
	})

	it('without header', async () => {
		await wrapper.setProps({filePromise: filePromiseNoHeaders})

		await element.trigger('click')
		expect(DownloadBtn.methods.download).toHaveBeenCalledTimes(1)
	})
})
