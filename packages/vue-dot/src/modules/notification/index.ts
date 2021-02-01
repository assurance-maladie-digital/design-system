import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { RootState } from '../';
import { NotificationState, NotificationObj } from './types';

import { notify } from './notify';

export const state: NotificationState = {
	notification: null
};

export const actions: ActionTree<NotificationState, RootState> = {
	add({ commit, state }, notification: NotificationObj) {
		notify(commit, state, notification);
	},
	addNotification({ commit, state }, notification: NotificationObj) {
		notify(commit, state, notification);
	},
	clear({ commit }) {
		commit('CLEAR');
	},
	clearNotification({ commit }) {
		commit('CLEAR');
	}
};

export const mutations: MutationTree<NotificationState> = {
	/** Add or replace with the new notification */
	ADD(state, notification: NotificationObj) {
		state.notification = notification;
	},
	/** Clear the notification */
	CLEAR(state) {
		state.notification = null;
	}
};

export const getters: GetterTree<NotificationState, RootState> = {};

/** The notification module */
export const notification: Module<NotificationState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};
