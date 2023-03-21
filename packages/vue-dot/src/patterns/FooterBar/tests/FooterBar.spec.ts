import Vue from 'vue';

import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FooterBar from '../';

let wrapper: Wrapper<Vue>;

describe('FooterBar', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FooterBar, {
			stubs: ['FooterLink']
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
