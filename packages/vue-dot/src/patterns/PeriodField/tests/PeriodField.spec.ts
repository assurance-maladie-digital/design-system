import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import PeriodField from '../';
import DatePicker from '../../DatePicker';

Vue.component('DatePicker', DatePicker);

let wrapper: Wrapper<Vue>;

describe('PeriodField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PeriodField);

		expect(wrapper).toMatchSnapshot();
	});
});
