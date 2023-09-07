/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			environment: "happy-dom",
			exclude: [
				// "**/directives/**",
				// "**/functions/**",
				// "**/helpers/**",
				// "**/mixins/**",
				// "**/modules/**",
				// "**/rules/**",
			],
			coverage: {
				provider: "istanbul", // or 'v8'
			},
		},
	})
);
