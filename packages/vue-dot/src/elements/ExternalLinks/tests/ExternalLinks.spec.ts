import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import ExternalLinks from '../ExternalLinks.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('ExternalLinks', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(ExternalLinks, {
			propsData: {
				position: 'top left'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
