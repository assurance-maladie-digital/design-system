import Vue from 'vue';

// Import vuetify/lib to use vuetify-loader
import Vuetify from 'vuetify/lib';

import { palette } from '@cnamts/design-tokens/src/colors';
import { IndexedObject } from 'src/types';

Vue.use(Vuetify);

const colorsClasses: IndexedObject = {};

Object.entries(palette).forEach(color => {
	Object.entries(color[1]).forEach(subColor => {
		const colorName = subColor[0] === 'base' ? 'base' : subColor[0].substring(-20, subColor[0].length - 2) + '-' + subColor[0].substring(subColor[0].length - 2);
		const name = color[0].toLowerCase() + '-' + colorName;
		colorsClasses[name] = subColor[1] as string;
	});
});

export const vuetify = new Vuetify({
	theme: {
		themes: {
			light: colorsClasses,
			dark: colorsClasses
		}
	},
	icons: {
		iconfont: 'mdiSvg'
	}
});
