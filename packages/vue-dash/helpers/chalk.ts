import chalk from 'chalk';

// Theme
export const colors = {
	primary: '#01579b'
};

// Basic log
// eslint-disable-next-line no-console
export const log = console.log;

// Advanced log
export function xLog(text: string, type: string): void {
	switch (type) {
		case 'verbose': {
			log(chalk.bold.hex('#909090')(('• ' + text)));
			break;
		}

		case 'event': {
			log(chalk.bold.white(text));
			break;
		}

		case 'error': {
			log(chalk.red(`Error: ${text}`));
			break;
		}

		default: {
			log(text);
			break;
		}
	}
}

export function trace(error: Error) {
	// eslint-disable-next-line no-console
	console.trace(error);
}

export default chalk;
