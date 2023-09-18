import { createApp } from "vue";
import Playground from "./Playground.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

import "@cnamts/design-tokens/dist/tokens";
import "@/styles/index.scss";

const vuetify = createVuetify({
	icons: {
		defaultSet: "mdi",
		aliases,
		sets: {
			mdi,
		},
	},
});

createApp(Playground).use(vuetify).mount("#app");
