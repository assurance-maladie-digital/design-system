import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import CookiesInformation from '../';

import { cookies } from '../../tests/data/cookiesList';
import { TypeEnum } from '../TypeEnum';

let wrapper: Wrapper<Vue>;

describe('CookiesInformation', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(CookiesInformation, {
			propsData: {
				tableItems: cookies,
				type: TypeEnum.FUNCTIONAL
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
