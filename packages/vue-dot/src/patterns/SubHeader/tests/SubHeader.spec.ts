import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import SubHeader from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('SubHeader', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(SubHeader, {
			propsData: {
				titleText: 'Test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
