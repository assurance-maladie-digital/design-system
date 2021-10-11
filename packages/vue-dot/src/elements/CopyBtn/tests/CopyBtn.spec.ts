import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import CopyBtn from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('CopyBtn', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
