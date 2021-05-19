import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import ExternalLinks from '../ExternalLinks.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('ExternalLinks.vue', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(ExternalLinks);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
