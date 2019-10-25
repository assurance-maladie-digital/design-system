module.exports = {
	preset: '@vue/cli-plugin-unit-jest/presets/typescript',
	testMatch: [
		'<rootDir>/src/**/tests/*.spec.ts',
		'<rootDir>/tests/**/*.spec.ts'
	],
	moduleNameMapper: {
		'^@/tests$': '<rootDir>/tests/index.ts',
		'^@/tests/(.*)$': '<rootDir>/tests/$1',
		'^@/(.*)$': '<rootDir>/src/$1'
	},
	coverageReporters: [
		'text',
		'html',
		'lcov',
		'text-summary'
	],
	coverageDirectory: '<rootDir>/tests/coverage',
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.ts',
		'!**/node_modules/**',
		'!**/*.d.ts',
		'!**/playground/**'
	],
	transformIgnorePatterns: [
		'./node_modules/(?!vuetify)'
	]
};
