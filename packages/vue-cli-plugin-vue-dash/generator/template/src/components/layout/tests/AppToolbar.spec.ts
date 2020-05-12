import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/html';

import AppToolbar from '../AppToolbar.vue';

let wrapper: Wrapper<Vue>;

const links = [
	{
		label: 'Test 1',
		to: {
			name: 'test1'
		},
		options: {
			exact: true
		}
	},
	{
		label: 'Test 2',
		to: {
			name: 'test2'
		}
	}
];

// Tests
describe('AppToolbar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(AppToolbar<% if (i18n) { %>, {
			mocks: {
				$t: (key: string) => {
					return key === 'components.layout.appToolbar.links' ? links : key;
				}
			}
		}<% } %>);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
