import { VueConstructor } from 'vue';
import { VueDotOptions } from '../types';
import { Framework } from 'vuetify/types';

// Extend global interfaces

/* eslint-disable @typescript-eslint/no-explicit-any */
type UnknownValue = any;

declare global {
	// Add window.Vue
	interface Window {
		Vue?: VueConstructor;
	}

	// @see https://github.com/microsoft/TypeScript/issues/45612
	interface Navigator {
		msSaveBlob(blob: UnknownValue, defaultName?: string): boolean;
		msSaveOrOpenBlob(blob: UnknownValue, defaultName?: string): boolean;
	}
}

declare module 'vue/types/vue' {
	// Add this.$vuetify
	interface Vue {
		$vd: VueDotOptions;
		$vuetify: Framework;
	}
}
