import Vue, { PluginFunction } from 'vue';

// Types for the library usage
// eg. Vue.use(VueDotP2, options)

export interface VueDotP2Options {}

export interface VueDotP2Plugin {
	install: PluginFunction<VueDotP2Options>;
}

declare const VueDotP2: VueDotP2Plugin;
export default VueDotP2;
