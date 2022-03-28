import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@cnamts/vue-dot/tests/utils/html';

import Maintenance from '../Maintenance.vue';

let wrapper: Wrapper<Vue>;

describe('Maintenance', () => {
	it('renders correctly', () => {
		wrapper = mountComponent(Maintenance);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
