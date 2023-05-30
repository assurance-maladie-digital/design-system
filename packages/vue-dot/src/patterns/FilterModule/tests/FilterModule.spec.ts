import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import DialogBox from '../../../elements/DialogBox';

import FilterModule from '../';

let wrapper: Wrapper<Vue>;

describe('FilterModule', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FilterModule, {
			stubs: {
				DialogBox
			},
			propsData: {
				filters: []
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
