import fs from 'fs-extra';
import consola from 'consola';

import { getToken, getColorToken, partition, toKebabCase } from './utils';

import { Color, Tokens, TokensBootstrap, Colors, ColorsBootstrap } from '../../src/types';
import {paletteBootstrap} from "../../src/boostrapColors";

function getColors(colors: Colors): string {
	let content = '';

	const [theme, palette] = partition(Object.entries(colors), ([_, value]) => typeof value === 'string');

	content += '// theme\n';

	(theme as [string, string][]).forEach(([name, value]) => {
		content += getToken(name, value);
	});

	content += '\n// colors';

	(palette as [string, Color][]).forEach(([colorName, colorValues]) => {
		content += `\n// ${toKebabCase(colorName)}\n`;

		Object.entries(colorValues).forEach(([variationName, colorValue]) => {
			content += getColorToken(colorName, variationName, colorValue);
		});
	});

	return content;
}

function getBootstrapColors(colors: ColorsBootstrap): string {
	let content = '';

	const [theme, palette] = partition(Object.entries(colors), ([_, value]) => typeof value === 'string');

	content += '// theme\n';

	(theme as [string, string][]).forEach(([name, value]) => {
		content += getToken(name, value);
	});

	content += '\n// colors';

	(palette as [string, ColorsBootstrap][]).forEach(([colorName, colorValues]) => {
		content += `\n// ${toKebabCase(colorName)}\n`;

		Object.entries(colorValues).forEach(([variationName, colorValue]) => {
			content += getColorToken(colorName, variationName, colorValue);
		});
	});

	return content;
}

export function generateScssFile(tokens: Tokens, distPath: string): void {
	consola.info('Generating SCSS file');

	let content = '';

	Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
		if (tokenName === 'colors') {
			content += getColors(tokenValue);
			return;
		}

		content += `// ${toKebabCase(tokenName)}\n`;

		if (typeof tokenValue === 'string') {
			content += getToken(tokenName, tokenValue) + '\n';
			return;
		}

		Object.entries(tokenValue).forEach(([name, value]) => {
			content += getToken(name, value as string);
		});

		content += '\n';
	});

	fs.writeFileSync(`${distPath}/tokens.scss`, content);
}

export function generateBootstrapScssFile(tokens: TokensBootstrap, distPath: string): void {
	consola.info('Generating Bootstrap SCSS file');

	let content = '';

	Object.entries(tokens).forEach(([tokenName, tokenValue]) => {
		if (tokenName === 'colors') {
			content += getBootstrapColors(tokenValue);
			return;
		}

		content += `// ${toKebabCase(tokenName)}\n`;

		if (typeof tokenValue === 'string') {
			content += getToken(tokenName, tokenValue) + '\n';
			return;
		}

		Object.entries(tokenValue).forEach(([name, value]) => {
			content += getToken(name, value as string);
		});

		content += '\n';
	});

	fs.writeFileSync(`${distPath}/bootstrap-tokens.scss`, content);
}

