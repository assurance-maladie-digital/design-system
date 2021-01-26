import { VueConstructor } from 'vue';
import { contentFunc } from '@nuxt/content/types/content';

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
		$content: contentFunc;
	}
}
