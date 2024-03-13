import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount, VueWrapper, DOMWrapper, shallowMount } from '@vue/test-utils';
import { vuetify } from '@tests/unit/setup';

import { filePromise } from './data/filePromise.ts';
import DownloadBtn from '../';
import { NotificationState } from '@/modules/notification/types';
import Vuex from 'vuex';
import { actions, mutations } from '@/modules/notification';

function createStore(state: NotificationState) {
	return new Vuex.Store({ state, actions, mutations });
}
describe('DownloadBtn', () => {
	let wrapper: VueWrapper<typeof DownloadBtn>
	let element: DOMWrapper<Element>
	beforeEach(() => {
		const store = createStore({
			notification: null,
		});
		vi.spyOn(DownloadBtn.methods, 'download')
		vi.spyOn(DownloadBtn.methods, 'addNotification')

		wrapper = shallowMount(DownloadBtn, {
			props: {
				filePromise
			},
			global: {
				plugins: [vuetify, store],
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

	it('with notification store', async () => {
		await element.trigger('click')

		expect(DownloadBtn.methods.addNotification).toHaveBeenCalledOnce()
		expect(DownloadBtn.methods.addNotification).toHaveBeenCalledWith('success', 'Document téléchargé avec succès.')
	})
})
