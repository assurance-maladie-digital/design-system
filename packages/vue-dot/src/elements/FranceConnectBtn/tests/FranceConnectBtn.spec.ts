import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests';

import FranceConnectBtn from '../FranceConnectBtn.vue';

let wrapper: Wrapper<Vue>;

describe('FranceConnectBtn', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(FranceConnectBtn, {
			propsData: {
				href: 'https://app.franceconnect.gouv.fr/'
			}
		});

		expect(wrapper).toMatchSnapshot();
	});

	it('renders correctly with connect-plus', () => {
		wrapper = mountComponent(FranceConnectBtn, {
			propsData: {
				href: 'https://app.franceconnect.gouv.fr/',
				connectPlus: true
			}
		});

		expect(wrapper).toMatchSnapshot();
	});
});
