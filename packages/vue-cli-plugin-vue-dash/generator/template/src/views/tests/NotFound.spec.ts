import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@/tests-unit/html';

import NotFound from '../NotFound.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('NotFound', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(NotFound);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
