import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import AlertWrapper from '../';

let wrapper: Wrapper<Vue>;

describe('AlertWrapper', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(AlertWrapper);

		expect(wrapper).toMatchSnapshot();
	});
});
