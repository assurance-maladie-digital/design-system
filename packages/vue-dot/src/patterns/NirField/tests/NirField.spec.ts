import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import NirField from '../';

let wrapper: Wrapper<Vue>;

describe('NirField', () => {
	it('renders correctly with 13 characters', () => {
		wrapper = mountComponent(
			NirField,
			{
				propsData: {
					nirNumber: 13
				}
			},
			true
		);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with 2 characters', () => {
		wrapper = mountComponent(
			NirField,
			{
				propsData: {
					nirKey: 2,
					keyRequired: true
				}
			},
			true
		);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
