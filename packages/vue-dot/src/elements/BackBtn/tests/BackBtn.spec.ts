import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import BackBtn from '../';

let wrapper: Wrapper<Vue>;

describe('BackBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(BackBtn);

		expect(wrapper).toMatchSnapshot();
	});
});
