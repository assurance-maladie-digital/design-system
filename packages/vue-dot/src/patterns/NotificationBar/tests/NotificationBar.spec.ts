import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import localVue, { mountComponent } from '@/tests';

import Vuex, { Store } from 'vuex';
localVue.use(Vuex);

import NotificationBar from '../';

let wrapper: Wrapper<Vue>;

export interface RootState {
	notification: {
		type: string;
		message: string;
		icon: string;
	};
}

// Tests
describe('NotificationBar', () => {
	let state;
	let actions;
	let store: Store<RootState>;

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
