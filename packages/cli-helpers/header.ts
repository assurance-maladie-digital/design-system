import chalk, { colors, log } from './logger';
import line from './line';
import figlet from 'figlet';

/** Display text with 'Georgia11' font, and 'primay' color */
export function renderHeader(text: string, author: string, version: string): void {
	const txt = figlet.textSync(text, {
		font: 'Georgia11',
		horizontalLayout: 'default',
		verticalLayout: 'default'
	});

	// Title
	log(chalk.hex(colors.primary)(txt));

	// Line
	line();
	log();

	// Version
	log(`🔖  Version ${version}`);

	// Author
	log(`👷  Made by ${chalk.bold(author)}`);

	log();
}
