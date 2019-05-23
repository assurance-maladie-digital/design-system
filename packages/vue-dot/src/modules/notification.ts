import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';
import { RootState } from './';

export interface NotificationObj {
	type: string;
	message: string;
	icon: string;
}

interface NotificationState {
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
	ADD(state, notification: NotificationObj) {
		state.notification = notification;
	},
	DELETE(state) {
		state.notification = null;
	}
};

const getters: GetterTree<NotificationState, RootState> = {};

const notification: Module<NotificationState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};

export default notification;
