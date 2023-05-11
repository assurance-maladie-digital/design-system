import { Commit } from 'vuex';

import { NotificationState, NotificationObj } from './types';

/** Commit mutation to add a notification */
export function notify(commit: Commit, state: NotificationState, notification: NotificationObj): void {
	if (state.notification) {
		commit('CLEAR');

		setTimeout(() => commit('ADD', notification), 250);

		return;
	}

	commit('ADD', notification);
}
