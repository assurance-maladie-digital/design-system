import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PageContainer from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('PageContainer', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(PageContainer);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
