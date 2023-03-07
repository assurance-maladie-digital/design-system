import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import InlineFilters from '../';

let wrapper: Wrapper<Vue>;

describe('InlineFilters', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(InlineFilters, {
			propsData: {
				filters: [],
				chipsLimit: 4,
				applyButton: false,
				applyFunction: () => undefined,
				hideReset: false,
				limitedInlineFilter: []
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
