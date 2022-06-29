import Vue from 'vue';
import { Wrapper } from '@vue/test-utils';

import { localVue, mountComponent } from '@/tests';
import { html } from '@/tests/utils/html';

import Vuex from 'vuex';
localVue.use(Vuex);

import NotificationBar from '../';

import { NotificationState, NotificationObj } from '../../../modules/notification/types';

let wrapper: Wrapper<Vue>;

const defaultNotification: NotificationObj = {
	type: 'success',
	message: 'test'
};

/** Create a new store with notification module */
function createStore(notification: NotificationObj = defaultNotification) {
	const state: NotificationState = {
		notification
	};

	const actions = {
		clearNotification: jest.fn()
	};

	return new Vuex.Store({
		modules: {
			notification: {
				state,
				actions,
				namespaced: true
			}
		}
	});
}

describe('NotificationBar', () => {
	it('renders correctly', () => {
		const store = createStore();

		wrapper = mountComponent(NotificationBar, {
			store
		});

		expect(html(wrapper)).toMatchSnapshot();
	});

	it('renders correctly with a custom icon', () => {
		const store = createStore({
			type: 'success',
			message: 'test',
			icon: 'test-icon'
		});

		wrapper = mountComponent(NotificationBar, {
			store
		});

		expect(html(wrapper)).toMatchSnapshot();
	});
});
