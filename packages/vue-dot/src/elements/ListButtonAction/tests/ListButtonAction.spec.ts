import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';
import ListButtonAction from '../ListButtonAction.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('ListButtonAction.vue', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(ListButtonAction);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
