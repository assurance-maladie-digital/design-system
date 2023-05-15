import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CookiesTable from '../';

import { cookies } from '../../tests/data/cookiesList';

let wrapper: Wrapper<Vue>;

describe('CookiesTable', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CookiesTable, {
			propsData: {
				items: cookies
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
