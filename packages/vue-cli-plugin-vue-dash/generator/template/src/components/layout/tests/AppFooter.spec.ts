import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/html';

import AppFooter from '../AppFooter.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('AppFooter', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(AppFooter);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
