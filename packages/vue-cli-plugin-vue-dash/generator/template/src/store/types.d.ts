/* eslint-disable @typescript-eslint/no-empty-interface */
export interface RootState {}

import { NotificationObj } from '@cnamts/vue-dot/src/modules/notification';

/**
 * This is used to properly type components using mappers from Vuex
 * see https://github.com/vuejs/vuex/pull/1121
 */
export interface VuexBindings {
	// modules/notification
	addNotification: (notification: NotificationObj) => void;
	clearNotification: () => void;
	notification: NotificationObj | null;
}
