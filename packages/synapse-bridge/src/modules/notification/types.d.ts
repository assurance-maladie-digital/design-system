export type NotificationTypes = 'success' | 'error' | 'info' | 'warning';

export interface NotificationObj {
	type: NotificationTypes | null;
	message: string;
	icon?: string | null;
	ref?: string;
}

export interface NotificationState {
	notification: NotificationObj | null;
}

export interface NotificationModule {
	addNotification: (notification: NotificationObj) => void;
	clearNotification: () => void;
	notification: NotificationObj | null;
}
