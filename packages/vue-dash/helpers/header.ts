import chalk, { colors, log } from './logger';
import line from './line';
import * as figlet from 'figlet';

import * as pkg from '../package.json';
const author = pkg.author.name;
const version = pkg.version;

/** Display 'Vue Dash' or `text` with 'Georgia11' font, and 'primay' color */
export default function renderHeader(text = 'Vue Dash'): void {
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
