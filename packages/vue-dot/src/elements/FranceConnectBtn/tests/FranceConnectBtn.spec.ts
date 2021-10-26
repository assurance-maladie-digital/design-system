import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests/unit';
import { html } from '@/tests/unit/utils/html';

import FranceConnectBtn from '../FranceConnectBtn.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('FranceConnectBtn', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(FranceConnectBtn, {
			propsData: {
				href: 'https://app.franceconnect.gouv.fr/'
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
