import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FooterLink from '../';

let wrapper: Wrapper<Vue>;

describe('FooterLink', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FooterLink);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
