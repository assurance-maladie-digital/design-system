import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import About from '../About.vue';

let wrapper: Wrapper<Vue>;

const links = [
	{
		title: 'Test',
		links: [
			{
				id: 0,
				url: 'https://example.com/',
				name: 'Test website'
			}
		]
	}
];

// Tests
describe('About', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(About<% if (i18n) { %>, {
			mocks: {
				$t: (key: string) => {
					return key === 'views.about.links' ? links : key;
				}
			}
		}<% } %>);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
