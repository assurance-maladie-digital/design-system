import { PluginFunction } from 'vue';
import { VuetifyTheme } from 'vuetify';

export interface Icon {
	name: string;
	svg: string;
}

export interface Config {
	colors?: VuetifyTheme;
	icons: Icon[]
}

export interface Theme {
	name: string;
	version: string;
	config?: Config;
}

export interface VueDotOptions {
	theme: Theme;
}

export default interface VueDotPlugin {
	install: PluginFunction<VueDotOptions>;
}
