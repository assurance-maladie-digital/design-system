import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import Logo from '../';

let wrapper: Wrapper<Vue>;

describe('Logo', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(Logo);

		expect(wrapper).toMatchSnapshot();
	});
});
