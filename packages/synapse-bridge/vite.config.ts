import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "pathe";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
	resolve: {
		alias: {
			"/@": resolve(__dirname, "./src"),
		},
	},
	plugins: [
		vue(),
		dts({
			insertTypesEntry: true,
		}),
		Components({
			dts: true,
			deep: true,
			directives: true,
			globs: [
				"src/elements/**/*.{vue, ts}",
				"src/patterns/**/*.{vue, ts}",
				"src/templates/**/*.{vue, ts}",
			],
		}),
	],
	build: {
		emptyOutDir: false,
		outDir: "dist",
		sourcemap: true,
		lib: {
			entry: {
				elements: "./src/elements/index.ts",
				patterns: "./src/patterns/index.ts",
				templates: "./src/templates/index.ts",
			},
			name: "synapse-bridge",
		},
		watch: {
			include: [resolve(__dirname, "src")],
		},
		rollupOptions: {
			external: ["vue"],
			output: {
				exports: "named",
				globals: {
					vue: "Vue",
				},
			},
		},
	},
	optimizeDeps: {
		exclude: ["vue"],
	},
});
