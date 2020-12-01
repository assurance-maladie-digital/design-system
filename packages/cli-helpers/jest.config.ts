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
		'<rootDir>/src/**/tests/*.spec.ts',
		'<rootDir>/tests/**/*.spec.ts'
	],
	moduleNameMapper: {
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
		'!**/*.d.ts'
	]
};

export default config;
