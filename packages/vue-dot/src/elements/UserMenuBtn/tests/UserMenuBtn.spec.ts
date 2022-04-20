import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import UserMenuBtn from '../';

let wrapper: Wrapper<Vue>;

describe('UserMenuBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(UserMenuBtn, {
			propsData: {
				fullName: 'Firstname Lastname'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
