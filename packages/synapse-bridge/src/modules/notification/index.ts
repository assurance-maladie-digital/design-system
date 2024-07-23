import type { ActionTree, GetterTree, Module, MutationTree } from 'vuex';

import type { RootState } from '../';
import type { NotificationObj, NotificationState } from './types';

import { notify } from './notify';

export const state: NotificationState = {
  notification: null,
};

export const actions: ActionTree<NotificationState, RootState> = {
  add(
    { commit, state: actionState }: { commit: any, state: any },
    notification: NotificationObj,
  ) {
    notify(commit, actionState, notification);
  },
  addNotification(
    { commit, state: actionState }: { commit: any, state: any },
    notification: NotificationObj,
  ) {
    notify(commit, actionState, notification);
  },
  clear({ commit }: { commit: any }) {
    commit('CLEAR');
  },
  clearNotification({ commit }: { commit: any }) {
    commit('CLEAR');
  },
};

export const mutations: MutationTree<NotificationState> = {
  ADD(localState: any, notification: NotificationObj) {
    localState.notification = notification;
  },
  CLEAR(localState: any) {
    localState.notification = null;
  },
};

export const getters: GetterTree<NotificationState, RootState> = {

  notification: (state: NotificationState) => state.notification,
};
export const notification: Module<NotificationState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
