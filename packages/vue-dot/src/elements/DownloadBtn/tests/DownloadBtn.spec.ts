import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import DownloadBtn from '../DownloadBtn.vue';

import { filePromise } from './data/filePromise';

let wrapper: Wrapper<Vue>;

interface TestComponent extends Vue {
	download: () => void;
}

describe('DownloadBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				filePromise
			},
			slots: {
				default: 'justificatif.pdf'
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('calls download function when pressed', async() => {
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

		actionBtn.trigger('click');

		expect(download).toBeCalled();
	});
});
