/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: "happy-dom",
			// TODO: Remove this excludes once when all tests are written
			exclude: [
				"**/directives/**",
				"**/functions/**",
				"**/helpers/**",
				"**/mixins/**",
				"**/modules/**",
				"**/rules/**",
			],
		},
	})
);
