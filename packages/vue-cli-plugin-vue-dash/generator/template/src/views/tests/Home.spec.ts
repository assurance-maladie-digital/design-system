import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import Home from '../Home.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('Home', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(Home);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
