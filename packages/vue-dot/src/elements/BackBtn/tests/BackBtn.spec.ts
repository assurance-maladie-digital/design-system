import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import BackBtn from '../';

let wrapper: Wrapper<Vue>;

describe('BackBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(BackBtn);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
