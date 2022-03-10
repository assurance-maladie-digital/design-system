import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

import { NotificationState, NotificationObj } from '../types';

import { actions, mutations } from '../';

const localVue = createLocalVue();
localVue.use(Vuex);

const notificationObj: NotificationObj = {
	type: 'success',
	message: 'test',
	icon: 'icon'
};

/** Create a new store from notification module */
function createStore(state: NotificationState) {
	return new Vuex.Store({ state, actions, mutations });
}

describe('notification', () => {
	it('updates the state when calling `add` action', () => {
		const state: NotificationState = {
			notification: null
		};

		const store = createStore(state);

		store.dispatch('add', notificationObj);

		expect(state.notification).toBe(notificationObj);
	});

	it('updates the state when calling `addNotification` action', () => {
		const state: NotificationState = {
			notification: null
		};

		const store = createStore(state);

		store.dispatch('addNotification', notificationObj);

		expect(state.notification).toBe(notificationObj);
	});

	it('clears state when calling `clear` action', () => {
		const state: NotificationState = {
			notification: notificationObj
		};

		const store = createStore(state);

		store.dispatch('clear');

		expect(state.notification).toBe(null);
	});

	it('clears state when calling `clearNotification` action', () => {
		const state: NotificationState = {
			notification: notificationObj
		};

		const store = createStore(state);

		store.dispatch('clearNotification');

		expect(state.notification).toBe(null);
	});
});
