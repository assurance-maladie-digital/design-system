import Vue, { VueConstructor } from 'vue';
import { Theme } from './types';
import { VuetifyObject } from 'vuetify/types';

declare global {
	interface Window {
		Vue: VueConstructor;
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$theme: Theme;
		$vuetify: VuetifyObject;
	}
}
