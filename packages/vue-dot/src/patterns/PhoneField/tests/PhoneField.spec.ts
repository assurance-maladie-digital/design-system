import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import PhoneField from '../';

let wrapper: Wrapper<Vue>;

describe('PhoneField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PhoneField, undefined, true);

		expect(wrapper).toMatchSnapshot();
	});
});
