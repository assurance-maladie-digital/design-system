import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import html from '@/tests/html';

import HeaderBar from '../HeaderBar.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderBar test', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				title: 'title'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

});
