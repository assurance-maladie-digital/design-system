import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import FranceConnectBtn from '../FranceConnectBtn.vue';

let wrapper: Wrapper<Vue>;

describe('FranceConnectBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FranceConnectBtn, {
			propsData: {
				href: 'https://app.franceconnect.gouv.fr/'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
