import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DownloadBtn from '../DownloadBtn.vue';

import { filePromise } from './data/filePromise';

let wrapper: Wrapper<Vue>;

interface TestComponent extends Vue {
	download: () => void;
}

// Tests
describe('DownloadBtn', () => {
	it('renders DownloadBtn correctly', () => {
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise
			},
			slots: {
				default: 'justificatif.pdf'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders DownloadBtn with props', () => { // TODO
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise,
				notification: 'Justificatif Téléchargé'
			},
			slots: {
				default: 'justificatif.pdf'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('testing download action', async() => { // TODO
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise
			},
			slots: {
				default: 'justificatif.pdf'
			},
			mocks: {
				download: jest.fn()
			}
		}, true) as Wrapper<TestComponent>;

		const download = jest.spyOn((wrapper.vm as TestComponent), 'download');

		const actionBtn = wrapper.find('button');
		expect(actionBtn.exists()).toBe(true);

		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		expect(download).toBeCalled();
	});
});
