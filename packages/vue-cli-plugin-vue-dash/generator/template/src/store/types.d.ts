/* eslint-disable @typescript-eslint/no-empty-interface */
export interface RootState {}

import { NotificationObj } from '@cnamts/vue-dot/src/modules/notification';

/**
 * This is used to properly type components using mappers from Vuex
 * see https://github.com/vuejs/vuex/pull/1121
 */
export interface VuexBindings {
	// modules/notification
	notify: (notification: NotificationObj) => void;
	rmNotif: () => void;
	notification: NotificationObj;
}
