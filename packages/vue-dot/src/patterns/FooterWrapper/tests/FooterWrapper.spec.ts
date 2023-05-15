import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import consola from 'consola';

import { mountComponent } from '@/tests';

import FooterWrapper from '../';

let wrapper: Wrapper<Vue>;

describe('FooterWrapper', () => {
	const spy = jest.fn();

	beforeEach(() => {
		consola.mockTypes(() => spy);
	});

	it('renders correctly', () => {
		wrapper = mountComponent(FooterWrapper);

		expect(wrapper).toMatchSnapshot();
		expect(spy).toHaveBeenCalledWith('FooterWrapper is deprecated since v2.2.0, use FooterBar instead.');
	});
});
