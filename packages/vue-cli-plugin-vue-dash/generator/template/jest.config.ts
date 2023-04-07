import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript',
	testMatch: [
		'<rootDir>/src/**/tests/*.spec.ts',
		'<rootDir>/tests/unit/**/*.spec.ts'
	],
	setupFiles: [
		'<rootDir>/tests/unit/setup.ts'
	],
	moduleNameMapper: {
		'^@/tests-unit$': '<rootDir>/tests/unit/index.ts',
		'^@/tests-unit/(.*)$': '<rootDir>/tests/unit/$1',
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	coverageReporters: [
		'text',
		'html',
		'lcov',
		'text-summary'
	],
	coverageDirectory: '<rootDir>/tests/unit/coverage',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.{ts,vue}',
		'!**/node_modules/**',
		'!**/*.d.ts',
		'!**/decorators.ts',
		'!**/constants/**',
		'!**/router/**',
		'!**/main.ts',
		'!**/theme/**',
		'!**/plugins/**',
		'!**/i18n.ts',
		'!**/store/**',
		'!**/services/**',
		'!**/tests/**',
		'!**/translations/**'
	],
	transformIgnorePatterns: [
		'./node_modules/(?!vuetify|@cnamts/vue-dot|@cnamts/form-builder)'
	],
	globals: {
		API_URL: 'http://localhost:8080',
		/**
		 * Workaround of error "TypeError: Unable to require `.d.ts` file."
		 * @see https://github.com/kulshekhar/ts-jest/issues/805#issuecomment-456055213
		 */
		'ts-jest': {
			isolatedModules: true
		}
	}
};

export default config;
