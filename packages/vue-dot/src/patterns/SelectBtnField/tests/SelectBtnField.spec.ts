import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import SelectBtnField from '../';

let wrapper: Wrapper<Vue>;

describe('SelectBtnField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(SelectBtnField);

		expect(wrapper).toMatchSnapshot();
	});
});
