import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import html from '@/tests-unit/html';

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
