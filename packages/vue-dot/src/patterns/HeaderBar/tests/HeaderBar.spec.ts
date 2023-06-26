import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import HeaderBar from '../';

let wrapper: Wrapper<Vue>;

describe('HeaderBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderBar);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with theme', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				theme: 'ameli-pro'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with title and subtitle', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				serviceTitle: 'Title',
				serviceSubTitle: 'Subtitle'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with navigationItems', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				navigationItems: [
					{
						label: 'Item 1',
						href: '#'
					},
					{
						label: 'Item 2',
						href: '#'
					}
				]
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with innerWidth', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				innerWidth: '1000'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with homeLink', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				homeLink: {
					href: '#',
					label: 'Home'
				}
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with homeHref', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				homeHref: '#'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with showNavBarMenuBtn', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				showNavBarMenuBtn: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with mobileVersion', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				mobileVersion: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with sticky mode', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				sticky: true
			}
		});

		expect(
			wrapper.find('.vd-header-bar-container').attributes('style')
		).toContain('margin-bottom');

		expect(wrapper).toMatchSnapshot();
	});
});
