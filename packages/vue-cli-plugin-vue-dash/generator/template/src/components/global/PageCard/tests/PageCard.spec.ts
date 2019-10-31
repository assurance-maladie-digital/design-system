import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import html from '@/tests-unit/html';

import PageCard from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('PageCard', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(PageCard);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
