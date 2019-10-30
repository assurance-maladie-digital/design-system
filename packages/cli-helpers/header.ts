import chalk, { colors, log } from './logger';
import line from './line';
import figlet from 'figlet';

/** Display text with 'Georgia11' font, and 'primary' color */
export function renderHeader(text: string, author?: string, version?: string): void {
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
	if (version) {
		log(`🔖  Version ${version}`);
	}

	// Author
	if (author) {
		log(`👷  Made by ${chalk.bold(author)}`);
	}

	log();
}
