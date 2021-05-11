import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PeriodFilter from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('PeriodFilter', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(PeriodFilter);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
