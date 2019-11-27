import chalk from 'chalk';

import colors from './colors';

/** Unicode Box-drawing character, see https://en.wikipedia.org/wiki/Box-drawing_character */
const LINE_CHARACTER = '─';

/**
 * Trace a straight line across the terminal
 *
 * @param {string} [lineColor=colors.primary] The color of the line
 */
export default function traceLine(lineColor = colors.primary): void {
	const cols = process.stdout.columns || 0;

	// For each column, display `─` in primary color
	for (let index = 0; index < cols; index++) {
		process.stdout.write(
			chalk.hex(lineColor)(LINE_CHARACTER)
		);
	}
}
