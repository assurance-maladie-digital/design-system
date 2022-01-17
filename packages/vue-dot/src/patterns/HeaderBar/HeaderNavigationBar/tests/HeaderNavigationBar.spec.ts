import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderNavigationBar from '../';
import { ThemeEnum } from '../../ThemeEnum';

let wrapper: Wrapper<Vue>;

// Tests
describe('HeaderNavigationBar', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(HeaderNavigationBar, {
			propsData: {
				theme: ThemeEnum.DEFAULT
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
