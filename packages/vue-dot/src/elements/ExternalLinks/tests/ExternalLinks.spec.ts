import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import ExternalLinks from '../ExternalLinks.vue';

let wrapper: Wrapper<Vue>;

describe('ExternalLinks', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(ExternalLinks, {
			propsData: {
				position: 'top left'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
