import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CopyBtn from '../';

let wrapper: Wrapper<Vue>;

describe('CopyBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CopyBtn, {
			propsData: {
				label: 'test',
				textToCopy: 'test'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
