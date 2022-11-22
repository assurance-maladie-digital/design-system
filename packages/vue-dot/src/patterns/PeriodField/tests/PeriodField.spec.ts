import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PeriodField from '../';
import DatePicker from '../../DatePicker';

Vue.component('DatePicker', DatePicker);

let wrapper: Wrapper<Vue>;

describe('PeriodField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PeriodField, {
			propsData: {
				value: {
					startDate: null,
					endDate: null
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
