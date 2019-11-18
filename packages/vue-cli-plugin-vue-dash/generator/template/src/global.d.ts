import Vue from 'vue';
import VuexBindings from './store/types';

declare module 'vue/types/vue' {
	// tslint:disable-next-line:no-empty-interface
	interface Vue extends VuexBindings {}
}
