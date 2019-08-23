import Vue, { PluginFunction } from 'vue';

// Types for the library usage
// eg. Vue.use(VueDot, options)

export interface Icon {
	name: string;
	svg: string;
}

export interface Config {
	icons: Icon[];
}

export interface Theme {
	name: string;
	version: string;
	config: Config;
}

export interface VueDotOptions {
	theme?: Theme;
}

declare const VueDot: VueDotPlugin;
export default VueDot;

export interface VueDotPlugin {
	install: PluginFunction<VueDotOptions>;
}

// Export generic type
export type Refs<T extends object> = Vue['$refs'] & T;
