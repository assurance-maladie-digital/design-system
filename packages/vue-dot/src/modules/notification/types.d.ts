export type NotificationTypes = 'success' | 'error' | 'info' | 'warning';

export interface NotificationObj {
	type: NotificationTypes;
	message: string;
	icon?: string;
	ref?: string;
}

/** The module contains only one notification at the time */
export interface NotificationState {
	notification: NotificationObj | null;
}

export interface NotificationModule {
	addNotification: (notification: NotificationObj) => void;
	clearNotification: () => void;
	notification: NotificationObj | null;
}
