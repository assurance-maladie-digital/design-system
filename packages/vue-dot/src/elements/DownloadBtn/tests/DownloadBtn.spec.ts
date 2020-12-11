import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import { AxiosResponse } from 'axios';

import DownloadBtn from '../DownloadBtn.vue';

let wrapper: Wrapper<Vue>;
const contentDispositionHeader = JSON.stringify({ type: 'inline', parameters: { filename: 'justificatif.pdf' } }) as string;

interface TestComponent extends Vue {
	download: () => void;
}

const filePromise: Promise<AxiosResponse<string>> = new Promise((resolve) => {
	resolve(
		{
			data: 'test',
			status: 200,
			statusText: 'test status Text',
			headers: { 'content-disposition': contentDispositionHeader },
			config: {}
		}
	);
});

// Tests
describe('DownloadBtn', () => {
	it('renders DownloadBtn correctly', () => {
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders DownloadBtn with props', () => {
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise,
				showFileIcon: true,
				text: 'justificatif.pdf',
				notification: 'Justificatif Téléchargé'
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('testing download action', async() => {
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise
			},
			mocks: {
				download: jest.fn()
			}
		}, true) as Wrapper<TestComponent>;

		const download = jest.spyOn(wrapper.vm, 'download' as any);

		const actionBtn = wrapper.find('button');
		expect(actionBtn.exists()).toBe(true);

		actionBtn.trigger('click');

		// Wait until $emits have been handled
		await wrapper.vm.$nextTick();

		expect(download).toBeCalled();
	});
});
