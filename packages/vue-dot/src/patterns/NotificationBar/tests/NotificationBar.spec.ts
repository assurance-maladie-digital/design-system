import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import localVue, { mountComponent } from '@/tests';

import Vuex from 'vuex';
localVue.use(Vuex);

import NotificationBar from '../';

let wrapper: Wrapper<Vue>;

// Tests
describe('NotificationBar', () => {
	let state;
	let actions;
	let store: any;

	// Mock store
	beforeEach(() => {
		state = {
			notification: {
				type: 'success',
				message: 'test',
				icon: 'test-icon'
			}
		};

		actions = {
			rmNotif: jest.fn()
		};

		store = new Vuex.Store({
			modules: {
				notification: {
					state,
					actions,
					namespaced: true
				}
			}
		});
	});

	it('renders correctly', () => {
		// Mount component
		wrapper = mountComponent(NotificationBar, {
			store
		});

		expect(wrapper).toMatchSnapshot();
	});
});
