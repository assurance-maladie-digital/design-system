import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import PasswordField from '../';

let wrapper: Wrapper<Vue>;

describe('PasswordField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PasswordField, undefined, true);

		expect(wrapper).toMatchSnapshot();
	});
});
