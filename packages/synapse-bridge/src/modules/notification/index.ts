import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { RootState } from '../';
import { NotificationState, NotificationObj } from './types';

import { notify } from './notify';

export const state: NotificationState = {
	notification: null,
};

export const actions: ActionTree<NotificationState, RootState> = {
	add({ commit, state}: { commit: any, state: any }, notification: NotificationObj) {
		notify(commit, state, notification);
	},
	addNotification({ commit, state }: { commit: any, state: any }, notification: NotificationObj) {
		notify(commit, state, notification);
	},
	clear({ commit }: { commit: any}) {
		commit('CLEAR');
	},
	clearNotification({ commit } : { commit: any}) {
		commit('CLEAR');
	},
};


export const mutations: MutationTree<NotificationState> = {
	ADD(state: any, notification: NotificationObj) {
		state.notification = notification;
	},
	CLEAR(state: any) {
		state.notification = null;
	},
};

export const getters: GetterTree<NotificationState, RootState> = {
	notification: (state :any) => state.notification,
};
export const notification: Module<NotificationState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
};
