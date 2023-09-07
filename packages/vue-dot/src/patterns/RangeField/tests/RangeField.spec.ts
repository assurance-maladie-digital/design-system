import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import RangeField from '../';

let wrapper: Wrapper<Vue>;

describe('RangeField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(RangeField, undefined, true);

		expect(wrapper).toMatchSnapshot();
	});
});
