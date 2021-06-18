import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderMenu from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderMenu', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderMenu, {
            propsData: {
                isopen: true,
				navBar: {},
				service: {}
			}
        });

		expect(html(wrapper)).toMatchSnapshot();
	});
});