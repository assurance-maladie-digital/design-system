import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import NumberPicker from '..';

let wrapper: Wrapper<Vue>;

describe('NumberPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NumberPicker);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
