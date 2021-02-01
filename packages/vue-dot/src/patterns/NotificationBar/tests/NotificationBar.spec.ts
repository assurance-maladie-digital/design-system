import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { localVue, mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import Vuex, { Store } from 'vuex';
localVue.use(Vuex);

import NotificationBar from '../';

import { NotificationState } from '../../../modules/notification/types';

let wrapper: Wrapper<Vue>;

// Tests
describe('NotificationBar', () => {
	let state;
	let actions;
	let store: Store<NotificationState>;

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
			clearNotification: jest.fn()
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

		expect(html(wrapper)).toMatchSnapshot();
	});
});
