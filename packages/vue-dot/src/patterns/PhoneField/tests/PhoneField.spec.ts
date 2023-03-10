import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PhoneField from '../';

let wrapper: Wrapper<Vue>;

describe('PhoneField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PhoneField, undefined, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
