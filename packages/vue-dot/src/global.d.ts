import Vue, { VueConstructor } from 'vue';
import { Theme } from '../types';
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
		$vd: Theme;
		$vuetify: Framework;
	}
}
