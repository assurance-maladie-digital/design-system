import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import NirField from '../';

let wrapper: Wrapper<Vue>;

describe('NirField', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NirField, undefined, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with 13 characters', () => {
		wrapper = mountComponent(NirField, {
			propsData: {
				nirLength: 13
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with a tooltip', () => {
		wrapper = mountComponent(NirField, {
			propsData: {
				tooltip: 'Information sur le NIR'
			}
		}, true);

		expect(wrapper).toMatchSnapshot();
	});
});
