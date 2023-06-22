import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import PeriodField from '../';

let wrapper: Wrapper<Vue>;

describe('PeriodField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PeriodField, {
			propsData: {
				field: {
					id: 'period',
					label: 'Période',
					type: 'period',
					value: {
						from: '2019-01-01',
						to: '2019-12-31'
					}
				}
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
