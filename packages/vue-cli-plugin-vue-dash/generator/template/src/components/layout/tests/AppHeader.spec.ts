import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import AppHeader from '../AppHeader.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('AppHeader', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(AppHeader);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
