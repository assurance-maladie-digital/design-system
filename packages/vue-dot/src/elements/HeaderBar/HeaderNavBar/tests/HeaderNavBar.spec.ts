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
				reactiveDisplay: false,
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
				reactiveDisplay: false,
				service: {}
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
	it('renders correctly with a reactive render', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar, {
			propsData: {
				navBar: {},
				isPro: false,
				reactiveDisplay: true,
				service: {}
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
	it('renders correctly with a reactive render and a pro template', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavBar, {
			propsData: {
				navBar: {},
				isPro: true,
				reactiveDisplay: true,
				service: {}
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
