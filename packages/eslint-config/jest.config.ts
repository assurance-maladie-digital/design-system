import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	moduleFileExtensions: ['ts', 'js'],
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
		'!**/node_modules/**',
		'!**/*.d.ts'
	]
};

export default config;
