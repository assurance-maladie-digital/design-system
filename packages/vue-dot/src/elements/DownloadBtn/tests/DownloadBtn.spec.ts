import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import DownloadBtn from '..';

let wrapper: Wrapper<Vue>;

// Tests
describe('DownloadBtn', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DownloadBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
