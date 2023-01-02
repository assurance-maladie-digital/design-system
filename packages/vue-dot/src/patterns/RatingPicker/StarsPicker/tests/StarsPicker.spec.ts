import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import StarsPicker from '..';

let wrapper: Wrapper<Vue>;

describe('StarsPicker', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(StarsPicker);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
