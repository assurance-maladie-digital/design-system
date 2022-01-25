import { NotificationModule } from '@cnamts/vue-dot/src/modules/notification/types';
import { VuexBindings } from './store/types';

declare module 'vue/types/vue' {
	interface Vue extends VuexBindings, NotificationModule {
		// Here you can add types for plugins
		// that don't have typings
		$maintenanceEnabled: boolean;
	}
}

declare global {
	// Declare env vars
	interface Window {
		VUE_APP_ENV: string;
		// Base URL of Axios requests
		API_URL: string;
		// Maintenance
		MAINTENANCE: string;
		MAINTENANCE_TITLE: string;
		MAINTENANCE_MESSAGE: string;<% if (matomo) { %>
		// Matomo
		MATOMO_ENABLED: string;
		MATOMO_SITE_ID: string;
		MATOMO_URL: string;<% } %>
	}
}
