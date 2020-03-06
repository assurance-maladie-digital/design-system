import Vue from 'vue';
import { VuexBindings } from './store/types';

declare module 'vue/types/vue' {
	// tslint:disable-next-line:no-empty-interface
	interface Vue extends VuexBindings {
		// Here you can add types for plugins
		// that don't have typings
	}
}
