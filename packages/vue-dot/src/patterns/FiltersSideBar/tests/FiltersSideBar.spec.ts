import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FilterSideBar from '../';

let wrapper: Wrapper<Vue>;

describe('FilterSideBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FilterSideBar, {
			propsData: {
				filters: [
					{
						name: 'nom',
						label: 'Nom',
						value: 'test',
						chips: []
					}
				],
				chipsLimit: 4,
				applyButton: false,
				applyFunction: () => undefined
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});