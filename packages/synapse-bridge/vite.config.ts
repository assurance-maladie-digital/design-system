import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
	plugins: [vue(), vuetify()],
	resolve: {
		alias: {
			"@": resolve(__dirname, "src"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "src/main.ts"),
			name: "SynapseBridge",
			fileName: "synapse-bridge",
		},
		rollupOptions: {
			external: ["vue", "vuetify"],
			output: {
				globals: {
					vue: "Vue",
					vuetify: "Vuetify",
				},
			},
		},
	},
});
