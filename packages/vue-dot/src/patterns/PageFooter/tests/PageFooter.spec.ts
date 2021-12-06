import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PageFooter from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('PageFooter', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(PageFooter, {
			propsData: {
				items: [
					{
						label: 'Mentions légales',
						to: '/cgu'
					}
				]
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
