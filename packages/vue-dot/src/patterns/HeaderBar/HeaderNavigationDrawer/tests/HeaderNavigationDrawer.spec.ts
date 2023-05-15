import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import HeaderNavigationDrawer from '../';
import { ThemeEnum } from '../../ThemeEnum';

let wrapper: Wrapper<Vue>;

describe('HeaderNavigationDrawer', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderNavigationDrawer, {
			propsData: {
				theme: ThemeEnum.DEFAULT,
				mobileVersion: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
