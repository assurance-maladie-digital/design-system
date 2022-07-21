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

	it('renders correctly with 13 characters NIR', () => {
		wrapper = mountComponent(NirField, {
			propsData: {
				nirLength: 13
			}
		}, true);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
