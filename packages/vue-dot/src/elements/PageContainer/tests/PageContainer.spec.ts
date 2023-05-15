import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import PageContainer from '../';

let wrapper: Wrapper<Vue>;

describe('PageContainer', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(PageContainer);

		expect(wrapper).toMatchSnapshot();
	});
});
