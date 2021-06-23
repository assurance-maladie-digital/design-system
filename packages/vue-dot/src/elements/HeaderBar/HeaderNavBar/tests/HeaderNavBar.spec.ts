import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderNavBar from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderNavBar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar, {
			propsData: {
				navBar: {},
				isPro: false,
				isDesktop: false,
				service: {}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
	it('renders correctly with a pro template', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar, {
			propsData: {
				navBar: {},
				isPro: true,
				isDesktop: false,
				service: {}
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
	it('renders correctly with a responsive render', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar, {
			propsData: {
				navBar: {},
				isPro: false,
				isDesktop: true,
				service: {}
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
	it('renders correctly with a responsive render and a pro template', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar, {
			propsData: {
				navBar: {},
				isPro: true,
				isDesktop: true,
				service: {}
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
