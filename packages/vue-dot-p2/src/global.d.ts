import { VueConstructor } from 'vue';
import { VueDotOptions } from '@cnamts/vue-dot/types';
import { Framework } from 'vuetify/types';

// Extend global interfaces

declare global {
	// Add window.Vue
	interface Window {
		Vue?: VueConstructor;
	}
}

declare module 'vue/types/vue' {
	// Add this.$vuetify
	interface Vue {
		$vd: VueDotOptions;
		$vuetify: Framework;
	}
}
