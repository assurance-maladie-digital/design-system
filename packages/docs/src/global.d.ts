import { NotificationObj } from '@cnamts/vue-dot/src/modules/notification/types';
import { VueDotOptions } from '@cnamts/vue-dot/types';
import { contentFunc } from '@nuxt/content/types/content';

export interface VuexBindings {
	// modules/notification
	addNotification: (notification: NotificationObj) => void;
	clearNotification: () => void;
	notification: NotificationObj | null;
}

// Extend global interfaces

declare module 'vue/types/vue' {
	// Add this.$content
	interface Vue extends VuexBindings {
		$content: contentFunc;
		$vd: VueDotOptions;
	}
}
