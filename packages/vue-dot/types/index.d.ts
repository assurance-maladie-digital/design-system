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

export interface VueDotPlugin {
	install: PluginFunction<VueDotOptions>;
}

declare const VueDot: VueDotPlugin;
export default VueDot;
