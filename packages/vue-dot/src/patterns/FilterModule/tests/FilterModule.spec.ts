import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import DialogBox from '../../../elements/DialogBox';

import FilterModule from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('FilterModule', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FilterModule, {
			stubs: {
				DialogBox
			},
			propsData: {
				filters: []
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
