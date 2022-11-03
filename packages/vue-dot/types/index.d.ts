import { VueConstructor, PluginFunction } from 'vue';
import { Framework } from 'vuetify/types';

// Types for the library usage
// eg. Vue.use(VueDot, options)

export interface Icons {
	[key: string]: string;
}

export interface Theme {
	icons: Icons;
}

export interface LocalStorageControl {
	version?: number;
	expiration?: number;
	prefix?: string;
}

export interface VueDotOptions {
	theme?: Theme;
	localStorageControl: LocalStorageControl;
}

export interface VueDotPlugin {
	install: PluginFunction<VueDotOptions>;
}

declare const VueDot: VueDotPlugin;

declare global {
	interface Window {
		Vue?: VueConstructor;
	}

	/** @see https://github.com/microsoft/TypeScript/issues/45612 */
	interface Navigator {
		/* eslint-disable @typescript-eslint/no-explicit-any */
		msSaveBlob(blob: any, defaultName?: string): boolean;
		msSaveOrOpenBlob(blob: any, defaultName?: string): boolean;
	}
}

declare module 'vue/types/vue' {
	interface Vue {
		$vd: VueDotOptions;
		$vuetify: Framework;
	}
}

export default VueDot;
