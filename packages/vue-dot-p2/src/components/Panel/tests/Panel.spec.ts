import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import Panel from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('Panel', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(Panel);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
