import { createApp } from "vue";
import Playground from "./Playground.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import { tokens } from "@cnamts/design-tokens/dist/tokens";
import "@/styles/index.scss";

const vuetify = createVuetify({
	defaults: {
		VBtn: {
			variant: "flat",
			style: "text-transform: none; font-weight: 600; letter-spacing: 0.005em;",
		},
	},
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
					primary: tokens.colors.primary,
					secondary: tokens.colors.secondary,
					accent: tokens.colors.accent,
					error: tokens.colors.error,
					info: tokens.colors.info,
					success: tokens.colors.success,
					warning: tokens.colors.warning,
					risquePro: tokens.colors.risquePro,
				},
			},
		},
	},
});

createApp(Playground).use(vuetify).mount("#app");
