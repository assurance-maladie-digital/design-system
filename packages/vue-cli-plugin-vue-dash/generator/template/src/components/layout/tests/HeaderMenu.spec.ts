import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import html from '@/tests-unit/html';

import HeaderMenu from '../HeaderMenu.vue';

let wrapper: Wrapper<Vue>;

const links = [
	{
		title: 'Test 1',
		disabled: false,
		to: {
			name: 'test1'
		}
	}
];

// Tests
describe('HeaderMenu', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderMenu, {
			mocks: {
				$t: (key: string) => {
					return key === 'components.layout.headerMenu.links' ? links : key;
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
