import { existsSync } from 'node:fs';
import { type FlatESLintConfigItem } from 'eslint-define-config';
import gitignore from 'eslint-config-flat-gitignore';

import {
	casePolice,
	ignores,
	imports,
	javascript,
	jsdoc,
	jsonc,
	markdown,
	node,
	sortPackageJson,
	sortTsconfig,
	stylistic,
	tests,
	typescript,
	unicorn,
	vue,
	yaml,
} from './configs';

import { hasVue } from './env';

export function cnamts(config: FlatESLintConfigItem | FlatESLintConfigItem[] = []): FlatESLintConfigItem[] {
	const configs = [];

	if (existsSync('.gitignore')) {
		configs.push(gitignore() as FlatESLintConfigItem);
	}

	configs.push(
		...casePolice,
		...ignores,
		...imports,
		...javascript,
		...jsdoc,
		...jsonc,
		...markdown,
		...node,
		...sortPackageJson,
		...sortTsconfig,
		...stylistic,
		...tests,
		...typescript,
		...unicorn,
		...yaml,
	);

	if (hasVue) {
		configs.push(...vue);
	}

	if (Object.keys(config).length > 0) {
		configs.push(...Array.isArray(config) ? config : [config]);
	}

	return configs;
}
