import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderNavigationBar from '../';
import { ThemeEnum } from '../../ThemeEnum';

let wrapper: Wrapper<Vue>;

describe('HeaderNavigationBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderNavigationBar, {
			propsData: {
				theme: ThemeEnum.DEFAULT
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
