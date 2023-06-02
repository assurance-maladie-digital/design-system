import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import BackToTopBtn from '../';

let wrapper: Wrapper<Vue>;

describe('BackToTopBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(BackToTopBtn);

		expect(wrapper).toMatchSnapshot();
	});
});
