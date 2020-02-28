import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/html';

import DataListItem from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('DataListItem', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(DataListItem, {
			propsData: {
				label: 'Test'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
