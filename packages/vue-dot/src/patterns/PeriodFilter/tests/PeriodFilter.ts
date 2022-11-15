import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PeriodFilter from '..';

let wrapper: Wrapper<Vue>;

describe('PeriodFilter', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PeriodFilter, {
			propsData: {
				chipsLimit: 4,
				filter: {
					name: 'nom',
					label: 'Nom',
					chips: []
				}
			}
		});
		expect(html(wrapper)).toMatchSnapshot();
	});
});
