import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { router, mountComponent } from '@/tests-unit';
import html from '@/tests-unit/html';

import App from '@/App.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('App.vue', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(App, {
			router
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
