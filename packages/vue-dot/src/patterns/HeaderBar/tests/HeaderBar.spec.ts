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

	it('renders correctly with mini version', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				miniVersion: true
			}
		});

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

	it('renders correctly with navigation-items', () => {
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

	it('renders correctly with inner-width', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				innerWidth: '1000'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with home-link', () => {
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

	it('renders correctly with home-href', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				homeHref: '#'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with show-nav-bar-menu-btn', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				showNavBarMenuBtn: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with mobile-version', () => {
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

		const container = wrapper.find('.vd-header-bar-container');

		expect(container.attributes('style')).toContain('margin-top');

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with sticky mode and show-sticky-nav-bar', () => {
		wrapper = mountComponent(HeaderBar, {
			propsData: {
				sticky: true,
				showStickyNavBar: true
			}
		});

		const container = wrapper.find('.vd-header-bar-container');

		expect(container.attributes('style')).toContain('margin-top');

		expect(wrapper).toMatchSnapshot();
	});
});
