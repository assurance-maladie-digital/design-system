import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import { AxiosResponse } from 'axios';

import DownloadBtn from '../DownloadBtn.vue';

let wrapper: Wrapper<Vue>;
const contentDispositionHeader = JSON.stringify({ type: 'inline', parameters: { filename: 'justificatif.pdf' } }) as string;

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
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
