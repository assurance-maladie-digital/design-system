import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';

import { NotificationState, NotificationObj } from '../types';

import { notify } from '../notify';

const localVue = createLocalVue();
localVue.use(Vuex);

const notificationObj: NotificationObj = {
	type: 'success',
	message: 'test',
	icon: 'icon'
};

// Tests
describe('notify', () => {
	it('adds a notification', () => {
		const commit = jest.fn();

		const state: NotificationState = {
			notification: null
		};

		notify(commit, state, notificationObj);

		expect(commit).toHaveBeenCalledWith('ADD', notificationObj);
	});

	it('removes a previous notification and adds a new one', () => {
		jest.useFakeTimers();
		const commit = jest.fn();

		const state: NotificationState = {
			notification: notificationObj
		};

		notify(commit, state, notificationObj);

		expect(commit).toHaveBeenCalledWith('CLEAR');
		jest.runAllTimers();

		expect(commit).toHaveBeenCalledWith('ADD', notificationObj);
	});
});
