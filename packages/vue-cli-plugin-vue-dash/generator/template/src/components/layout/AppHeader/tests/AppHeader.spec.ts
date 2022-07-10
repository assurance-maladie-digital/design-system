import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import AppHeader from '../';

let wrapper: Wrapper<Vue>;

describe('AppHeader', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(AppHeader, {
			mocks: {
				$maintenanceEnabled: false,
				$t: (key: string) => {
					return key === 'components.layout.appHeader.navigationItems' ? [] : key;
				}
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly when maintenance is enabled', () => {
		wrapper = mountComponent(AppHeader, {
			mocks: {
				$maintenanceEnabled: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
