import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import HeaderMenuBtn from '../';

let wrapper: Wrapper<Vue>;

describe('HeaderMenuBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderMenuBtn);

		expect(wrapper).toMatchSnapshot();
	});
});
