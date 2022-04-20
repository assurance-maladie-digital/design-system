import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FooterWrapper from '../';

let wrapper: Wrapper<Vue>;

describe('FooterWrapper', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FooterWrapper);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
