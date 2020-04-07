import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { mountComponent } from '@/tests-unit';
import { html } from '@/tests-unit/html';

import Vuex from 'vuex';

import Home from '../Home.vue';

let wrapper: Wrapper<Vue>;

// Tests
describe('Home', () => {
	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(Home);

		expect(html(wrapper)).toMatchSnapshot();
	});
});
