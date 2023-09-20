import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	testEnvironmentOptions: {
		customExportConditions: ["node", "node-addons"],
	},
	testMatch: [
		"<rootDir>/**/tests/*.spec.ts",
		"<rootDir>/tests/unit/**/*.spec.ts",
	],
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/$1",
	},

	transform: {
		"^.+\\.(js)$": "babel-jest",
		"^.+\\.(ts)$": "ts-jest",
		"^.+\\.(css|scss|png|jpg|svg)$": "jest-transform-stub",
		"^.+\\.(vue)$": "@vue/vue3-jest",
	},
	coverageReporters: ["text", "html", "lcov", "text-summary"],
	coverageDirectory: "<rootDir>/tests/unit/coverage",
	collectCoverage: true,
	collectCoverageFrom: [
		"**/*.{ts,vue}",
		"!**/node_modules/**",
		"!**/*.config.ts",
		"!**/elements/**",
		"!**/functions/**",
		"!**/helpers/**",
		"!**/mixins/**",
		"!**/main.ts",
	],
	globals: {
		API_URL: "http://localhost:8080",
	},
	transformIgnorePatterns: ["./node_modules/(?!vuetify)"],
};

export default config;
