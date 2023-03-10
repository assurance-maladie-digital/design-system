import { toKebabCase } from '../../src/utils';

export function partition<T = any>(array: T[], callback: (element: T) => boolean): [T[], T[]] {
	const matches: T[] = [];
	const nonMatches: T[] = [];

	array.forEach(element => (callback(element) ? matches : nonMatches).push(element));

	return [matches, nonMatches];
}

export function getToken(tokenName: string, tokenValue: string): string {
	return `$vd-${toKebabCase(tokenName)}: ${tokenValue};\n`;
}

export function getColorToken(colorName: string, variationName: string, colorValue: string): string {
	const variation = variationName.replace(/\d+/, '-$&');

	return getToken(`${colorName}-${variation}`, colorValue);
}

export { toKebabCase };
