import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CollapseList from '..';

let wrapper: Wrapper<Vue>;

describe('CollapseList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CollapseList);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
