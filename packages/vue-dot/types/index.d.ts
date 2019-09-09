import Vue, { PluginFunction } from 'vue';

// Types for the library usage
// eg. Vue.use(VueDot, options)

export interface Icons {
	[key: string]: string;
}

export interface Theme {
	icons: Icons;
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
