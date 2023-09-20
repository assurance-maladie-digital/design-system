import { createApp } from "vue";
import Playground from "./Playground.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { tokens } from "@cnamts/design-tokens/dist/tokens";
import "@/styles/index.scss";

import { IndexedObject } from "../src/types";

const colors = {
	primary: tokens.colors.primary,
	secondary: tokens.colors.secondary,
	accent: tokens.colors.accent,
	error: tokens.colors.error,
	info: tokens.colors.info,
	success: tokens.colors.success,
	warning: tokens.colors.warning,
	risquePro: tokens.colors.risquePro,
};

const palette = {
	amBlue: {
		darken80: tokens.colors.amBlue.darken80,
		darken60: tokens.colors.amBlue.darken60,
		darken40: tokens.colors.amBlue.darken40,
		darken20: tokens.colors.amBlue.darken20,
		base: tokens.colors.amBlue.base,
		lighten20: tokens.colors.amBlue.lighten20,
		lighten40: tokens.colors.amBlue.lighten40,
		lighten60: tokens.colors.amBlue.lighten60,
		lighten80: tokens.colors.amBlue.lighten80,
		lighten90: tokens.colors.amBlue.lighten90,
		lighten97: tokens.colors.amBlue.lighten97,
	},
	cyan: {
		darken80: tokens.colors.cyan.darken80,
		darken60: tokens.colors.cyan.darken60,
		darken40: tokens.colors.cyan.darken40,
		darken20: tokens.colors.cyan.darken20,
		base: tokens.colors.cyan.base,
		lighten20: tokens.colors.cyan.lighten20,
		lighten40: tokens.colors.cyan.lighten40,
		lighten60: tokens.colors.cyan.lighten60,
		lighten80: tokens.colors.cyan.lighten80,
		lighten90: tokens.colors.cyan.lighten90,
		lighten97: tokens.colors.cyan.lighten97,
	},
	frostedBlue: {
		darken80: tokens.colors.frostedBlue.darken80,
		darken60: tokens.colors.frostedBlue.darken60,
		darken40: tokens.colors.frostedBlue.darken40,
		darken20: tokens.colors.frostedBlue.darken20,
		base: tokens.colors.frostedBlue.base,
		lighten20: tokens.colors.frostedBlue.lighten20,
		lighten40: tokens.colors.frostedBlue.lighten40,
		lighten60: tokens.colors.frostedBlue.lighten60,
		lighten80: tokens.colors.frostedBlue.lighten80,
		lighten90: tokens.colors.frostedBlue.lighten90,
		lighten97: tokens.colors.frostedBlue.lighten97,
	},
	parme: {
		darken80: tokens.colors.parme.darken80,
		darken60: tokens.colors.parme.darken60,
		darken40: tokens.colors.parme.darken40,
		darken20: tokens.colors.parme.darken20,
		base: tokens.colors.parme.base,
		lighten20: tokens.colors.parme.lighten20,
		lighten40: tokens.colors.parme.lighten40,
		lighten60: tokens.colors.parme.lighten60,
		lighten80: tokens.colors.parme.lighten80,
		lighten90: tokens.colors.parme.lighten90,
		lighten97: tokens.colors.parme.lighten97,
	},
	mauve: {
		darken80: tokens.colors.mauve.darken80,
		darken60: tokens.colors.mauve.darken60,
		darken40: tokens.colors.mauve.darken40,
		darken20: tokens.colors.mauve.darken20,
		base: tokens.colors.mauve.base,
		lighten20: tokens.colors.mauve.lighten20,
		lighten40: tokens.colors.mauve.lighten40,
		lighten60: tokens.colors.mauve.lighten60,
		lighten80: tokens.colors.mauve.lighten80,
		lighten90: tokens.colors.mauve.lighten90,
		lighten97: tokens.colors.mauve.lighten97,
	},
	pink: {
		darken80: tokens.colors.pink.darken80,
		darken60: tokens.colors.pink.darken60,
		darken40: tokens.colors.pink.darken40,
		darken20: tokens.colors.pink.darken20,
		base: tokens.colors.pink.base,
		lighten20: tokens.colors.pink.lighten20,
		lighten40: tokens.colors.pink.lighten40,
		lighten60: tokens.colors.pink.lighten60,
		lighten80: tokens.colors.pink.lighten80,
		lighten90: tokens.colors.pink.lighten90,
		lighten97: tokens.colors.pink.lighten97,
	},
	brick: {
		darken80: tokens.colors.brick.darken80,
		darken60: tokens.colors.brick.darken60,
		darken40: tokens.colors.brick.darken40,
		darken20: tokens.colors.brick.darken20,
		base: tokens.colors.brick.base,
		lighten20: tokens.colors.brick.lighten20,
		lighten40: tokens.colors.brick.lighten40,
		lighten60: tokens.colors.brick.lighten60,
		lighten80: tokens.colors.brick.lighten80,
		lighten90: tokens.colors.brick.lighten90,
		lighten97: tokens.colors.brick.lighten97,
	},
	orange: {
		darken80: tokens.colors.orange.darken80,
		darken60: tokens.colors.orange.darken60,
		darken40: tokens.colors.orange.darken40,
		darken20: tokens.colors.orange.darken20,
		base: tokens.colors.orange.base,
		lighten20: tokens.colors.orange.lighten20,
		lighten40: tokens.colors.orange.lighten40,
		lighten60: tokens.colors.orange.lighten60,
		lighten80: tokens.colors.orange.lighten80,
		lighten90: tokens.colors.orange.lighten90,
		lighten97: tokens.colors.orange.lighten97,
	},
	yellow: {
		darken80: tokens.colors.yellow.darken80,
		darken60: tokens.colors.yellow.darken60,
		darken40: tokens.colors.yellow.darken40,
		darken20: tokens.colors.yellow.darken20,
		base: tokens.colors.yellow.base,
		lighten20: tokens.colors.yellow.lighten20,
		lighten40: tokens.colors.yellow.lighten40,
		lighten60: tokens.colors.yellow.lighten60,
		lighten80: tokens.colors.yellow.lighten80,
		lighten90: tokens.colors.yellow.lighten90,
		lighten97: tokens.colors.yellow.lighten97,
	},
	green: {
		darken80: tokens.colors.green.darken80,
		darken60: tokens.colors.green.darken60,
		darken40: tokens.colors.green.darken40,
		darken20: tokens.colors.green.darken20,
		base: tokens.colors.green.base,
		lighten20: tokens.colors.green.lighten20,
		lighten40: tokens.colors.green.lighten40,
		lighten60: tokens.colors.green.lighten60,
		lighten80: tokens.colors.green.lighten80,
		lighten90: tokens.colors.green.lighten90,
		lighten97: tokens.colors.green.lighten97,
	},
	turquoise: {
		darken80: tokens.colors.turquoise.darken80,
		darken60: tokens.colors.turquoise.darken60,
		darken40: tokens.colors.turquoise.darken40,
		darken20: tokens.colors.turquoise.darken20,
		base: tokens.colors.turquoise.base,
		lighten20: tokens.colors.turquoise.lighten20,
		lighten40: tokens.colors.turquoise.lighten40,
		lighten60: tokens.colors.turquoise.lighten60,
		lighten80: tokens.colors.turquoise.lighten80,
		lighten90: tokens.colors.turquoise.lighten90,
		lighten97: tokens.colors.turquoise.lighten97,
	},
	grey: {
		darken80: tokens.colors.grey.darken80,
		darken60: tokens.colors.grey.darken60,
		darken40: tokens.colors.grey.darken40,
		darken20: tokens.colors.grey.darken20,
		base: tokens.colors.grey.base,
		lighten20: tokens.colors.grey.lighten20,
		lighten40: tokens.colors.grey.lighten40,
		lighten60: tokens.colors.grey.lighten60,
		lighten80: tokens.colors.grey.lighten80,
		lighten90: tokens.colors.grey.lighten90,
		lighten97: tokens.colors.grey.lighten97,
	},
};

export const colorClasses: IndexedObject = {};

function toKebabCase(value: string): string {
	return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, "$1-$2").toLowerCase();
}

Object.entries(palette).forEach(([colorName, colorValues]) => {
	Object.entries(colorValues).forEach(([variationName, colorValue]) => {
		const colorClass = toKebabCase(
			`${colorName}-${variationName}`
				.replace(/\d+/, "-$&")
				.replace("-base", "")
		);

		colorClasses[colorClass] = colorValue as string;
	});
});

const vuetify = createVuetify({
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: {
			mdi,
		},
	},
	theme: {
		defaultTheme: "light",
		themes: {
			light: {
				colors: {
					...colors,
					...colorClasses,
				},
			},
		},
	},
});

createApp(Playground).use(vuetify).mount("#app");
