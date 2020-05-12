import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/html';

import Links from '../';

let wrapper: Wrapper<Vue>;

const links = [
	{
		id: 0,
		url: 'https://github.com/assurance-maladie-digital/design-system',
		name: 'Design System'
	}
];

// Tests
describe('Links', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(Links, {
			propsData: {
				links
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
