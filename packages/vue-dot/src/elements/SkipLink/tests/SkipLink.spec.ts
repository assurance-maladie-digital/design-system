import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import SkipLink from '../';

let wrapper: Wrapper<Vue>;

describe('SkipLink', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(SkipLink);

		expect(wrapper).toMatchSnapshot();
	});
});
