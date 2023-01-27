import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import NirField from '../';

let wrapper: Wrapper<Vue>;

describe('NirField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NirField, undefined, true);

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with 15 characters', () => {
		wrapper = mountComponent(
			NirField,
			{
				propsData: {
					nirNumber: 13,
					nirKey: 2
				}
			},
			true
		);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
