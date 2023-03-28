import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CollapsibleList from '../';

let wrapper: Wrapper<Vue>;

describe('CollapsibleList', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CollapsibleList);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
