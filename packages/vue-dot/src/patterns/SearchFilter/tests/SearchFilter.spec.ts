import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import PeriodField from '../';

let wrapper: Wrapper<Vue>;

describe('PeriodField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PeriodField);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
