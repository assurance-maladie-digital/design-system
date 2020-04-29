module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript',
	testMatch: [
		'<rootDir>/src/**/tests/*.spec.ts',
		'<rootDir>/tests/unit/**/*.spec.ts'
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
		'./node_modules/(?!vuetify|@cnamts/vue-dot)'
	],
	globals: {
		API_URL: 'http://localhost:8080',
		MAINTENANCE: 'false',
		MAINTENANCE_TITLE: '',
		MAINTENANCE_MESSAGE: '',
		// Workaround of error "TypeError: Unable to require `.d.ts` file."
		// See https://github.com/kulshekhar/ts-jest/issues/805#issuecomment-456055213
		'ts-jest': {
			isolatedModules: true
		}
	}
};
