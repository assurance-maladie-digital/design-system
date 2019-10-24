import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../';

export interface NotificationObj {
	type: string;
	message: string;
	icon: string;
}

/** The module contains only one notification at the time */
export interface NotificationState {
	notification: NotificationObj | null;
}

const state: NotificationState = {
	notification: null
};

const actions: ActionTree<NotificationState, RootState> = {
	notify({ commit }, notification: NotificationObj) {
		commit('ADD', notification);
	},
	rmNotif({ commit }) {
		commit('DELETE');
	}
};

const mutations: MutationTree<NotificationState> = {
	/** Add (or replace) with the new notification */
	ADD(state, notification: NotificationObj) {
		state.notification = notification;
	},
	/** Simply erase the notification */
	DELETE(state) {
		state.notification = null;
	}
};

const getters: GetterTree<NotificationState, RootState> = {};

/** The notification module */
const notification: Module<NotificationState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};

export default notification;
