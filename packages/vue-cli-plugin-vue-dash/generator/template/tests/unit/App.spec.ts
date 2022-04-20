import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { router, mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import App from '@/App.vue';

let wrapper: Wrapper<Vue>;

describe('App', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(App, {
			router,
			mocks: {
				$maintenanceEnabled: false
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly when maintenance is enabled', () => {
		wrapper = mountComponent(App, {
			router,
			mocks: {
				$maintenanceEnabled: true
			}
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
