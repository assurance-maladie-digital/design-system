import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuetify from "vite-plugin-vuetify";

export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	plugins: [vue(), vuetify({ autoImport: true })],
	build: {
		lib: {
			entry: resolve(__dirname, "dev/main.ts"),
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
