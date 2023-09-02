import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import SearchListField from '../';

let wrapper: Wrapper<Vue>;

describe('SearchListField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(SearchListField);

		expect(wrapper).toMatchSnapshot();
	});
});
