import chalk from 'chalk';

// Theme
export const colors = {
	primary: '#01579b'
};

// Basic log
// eslint-disable-next-line no-console
export const log = console.log;

export function cmd(text: string): void {
	log(chalk.grey('$ ') + chalk.cyan(text));
}

export function info(text: string): void {
	log(chalk.bgBlue.black(' INFO ') + ` ${chalk.blue(text)}`);
}

export function done(text: string): void {
	log(chalk.bgGreen.black(' DONE ') + ` ${chalk.green(text)}`);
}

export function warn(text: string): void {
	log(chalk.bgYellow.black(' WARN ') + ` ${chalk.yellow(text)}`);
}

export function error(text: string): void {
	log(chalk.bgRed(' ERROR ') + ` ${chalk.red(text)}`);
}

export function verbose(text: string): void {
	log(chalk.bgWhite.black(' VERBOSE ') + ` ${chalk.hex('#909090')(text)}`);
}

export function event(text: string): void {
	log(chalk.bold.white(text));
}

export default chalk;
