import chalk from 'chalk';
import figlet from 'figlet';

import { log } from './logger';
import { traceLine } from './traceLine';
import { colors } from './colors';

/**
 * Display header with 'Georgia11' font and 'primary' color
 *
 * @param {string} text The main text of the header
 * @param {string} [author] Package author
 * @param {string} [version] Package version
 */
export function renderHeader(text: string, author?: string, version?: string): void {
	const txt = figlet.textSync(text, {
		font: 'Georgia11',
		horizontalLayout: 'default',
		verticalLayout: 'default'
	});

	// Title
	log(chalk.hex(colors.primary)(txt));

	traceLine();

	// Use a true log for assert in tests
	// tslint:disable-next-line: no-console
	console.log();

	if (author) {
		log(`👷  Made by ${chalk.bold(author)}`);
	}

	if (version) {
		log(`🔖  Version ${version}`);
	}

	if (version || author) {
		log();
	}
}
