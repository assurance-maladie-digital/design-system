import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FooterBar from '../';

let wrapper: Wrapper<Vue>;

describe('FooterBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FooterBar, {
			stubs: ['RouterLink']
		});

		expect(wrapper).toMatchSnapshot();
	});
});
