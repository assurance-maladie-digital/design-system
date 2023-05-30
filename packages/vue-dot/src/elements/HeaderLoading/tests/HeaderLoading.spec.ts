import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import HeaderLoading from '../';

let wrapper: Wrapper<Vue>;

describe('HeaderLoading', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(HeaderLoading);

		expect(wrapper).toMatchSnapshot();
	});
});
