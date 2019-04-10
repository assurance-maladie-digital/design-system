import chalk, { colors, log, xLog } from './chalk';
import line from './line';
import * as figlet from 'figlet';

import * as pkg from '../package.json';
const author = pkg.author.name;
const version = pkg.version;

// Display 'Vue Dash' or `text` with 'Georgia11' font, and 'primay' color
export default function renderHeader(text = 'Vue Dash') {
	// Title
	log(
		chalk.hex(colors.primary)
			(figlet.textSync(text, {
				font: 'Georgia11',
				horizontalLayout: 'default',
				verticalLayout: 'default'
			})
		)
	);

	// Line
	line();
	log();

	// Version
	xLog(`🔖  Version ${version}`, 'event');

	// Author
	log(`👷  Made by ${chalk.bold(author)}`);

	log();
}
