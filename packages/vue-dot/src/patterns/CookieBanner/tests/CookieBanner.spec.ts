import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CookieBanner from '../';

let wrapper: Wrapper<Vue>;

describe('CookieBanner', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CookieBanner);

		expect(wrapper).toMatchSnapshot();
	});
});
