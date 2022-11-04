import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	moduleFileExtensions: ['js', 'ts'],
	transform: {
		'^.+\\.ts$': require.resolve('ts-jest')
	},
	transformIgnorePatterns: [
		'/node_modules/'
	],
	testMatch: [
		'<rootDir>/tests/**/*.spec.ts'
	],
	coverageReporters: [
		'text',
		'html',
		'lcov',
		'text-summary'
	],
	coverageDirectory: '<rootDir>/tests/coverage',
	collectCoverage: true,
	collectCoverageFrom: [
		'*.js',
		'!.eslintrc.js',
		'!lint-staged.config.js',
		'!**/node_modules/**',
		'!**/*.d.ts'
	]
};

export default config;
