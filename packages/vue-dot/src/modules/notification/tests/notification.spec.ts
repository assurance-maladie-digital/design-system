import { createLocalVue } from '@vue/test-utils';
import Vuex, { ActionTree } from 'vuex';

import { NotificationState, actions as moduleActions, mutations } from '../';

const localVue = createLocalVue();
localVue.use(Vuex);

const notificationObj = {
	type: 'success',
	message: 'test',
	icon: 'icon'
};

/** Create a new store from notification module */
function createStore(state: NotificationState) {
	// Fix actions typings
	const actions = moduleActions as unknown as ActionTree<NotificationState, NotificationState>;

	return new Vuex.Store({ state, actions, mutations });
}

// Tests
describe('notification', () => {
	it('updates the state when calling notify action', () => {
		const state = {
			notification: null
		};

		const store = createStore(state);

		store.dispatch('notify', notificationObj);

		expect(state.notification).toBe(notificationObj);
	});

	it('clears state when calling rmNotif action', () => {
		const state = {
			notification: notificationObj
		};

		const store = createStore(state);

		store.dispatch('rmNotif');

		expect(state.notification).toBe(null);
	});
});
