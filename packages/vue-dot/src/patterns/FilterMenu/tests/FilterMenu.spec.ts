import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import NewFilter from '../';

let wrapper: Wrapper<Vue>;

describe('NewFilter', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(NewFilter, {
			propsData: {
				filters: []
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
