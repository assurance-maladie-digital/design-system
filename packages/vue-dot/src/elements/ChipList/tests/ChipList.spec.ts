import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import ChipList from '../';

let wrapper: Wrapper<Vue>;

describe('ChipList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(ChipList);

		expect(wrapper).toMatchSnapshot();
	});
});
