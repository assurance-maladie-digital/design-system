import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import HeaderMenuBtn from '../';

let wrapper: Wrapper<Vue>;

describe('HeaderMenuBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderMenuBtn);

		expect(wrapper).toMatchSnapshot();
	});
});
