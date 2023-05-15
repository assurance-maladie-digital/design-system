import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import consola from 'consola';

import { mountComponent } from '@/tests';

import FooterBtn from '../';

let wrapper: Wrapper<Vue>;

describe('FooterBtn', () => {
	const spy = jest.fn();

	beforeEach(() => {
		consola.mockTypes(() => spy);
	});

	it('renders correctly', () => {
		wrapper = mountComponent(FooterBtn);

		expect(wrapper).toMatchSnapshot();
		expect(spy).toHaveBeenCalledWith('FooterBtn is deprecated since v2.2.0, use FooterBar instead.');
	});
});
