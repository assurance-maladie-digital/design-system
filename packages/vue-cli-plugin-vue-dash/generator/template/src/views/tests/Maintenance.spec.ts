import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import Maintenance from '../Maintenance.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('Maintenance', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(Maintenance);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
