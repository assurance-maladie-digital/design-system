// eslint-disable no-console

import chalk from 'chalk';

import { colors } from './colors';

/** Wrapper for console.log to avoid lint errors */
export const log = console.log;

/**
 * Display a command
 *
 * @param {string} text The text to render
 */
export function cmd(text: string): void {
	console.log(chalk.grey('$ ') + chalk.cyan(text));
}

/**
 * Display an information
 *
 * @param {string} text The text to render
 */
export function info(text: string): void {
	console.log(chalk.bgBlue.black(' INFO ') + ` ${chalk.blue(text)}`);
}

/**
 * Display a success message (done)
 *
 * @param {string} text The text to render
 */
export function done(text: string): void {
	console.log(chalk.bgGreen.black(' DONE ') + ` ${chalk.green(text)}`);
}

/**
 * Display a warning
 *
 * @param {string} text The text to render
 */
export function warn(text: string): void {
	console.log(chalk.bgYellow.black(' WARN ') + ` ${chalk.yellow(text)}`);
}

/**
 * Display an error
 *
 * @param {string} text The text to render
 */
export function error(text: string): void {
	console.log(chalk.bgRed(' ERROR ') + ` ${chalk.red(text)}`);
}

/**
 * Display a verbose log
 *
 * @param {string} text The text to render
 */
export function verbose(text: string): void {
	console.log(chalk.bgWhite.black(' VERBOSE ') + ` ${chalk.hex(colors.lightGrey)(text)}`);
}

/**
 * Display an event
 *
 * @param {string} text The text to render
 */
export function event(text: string): void {
	console.log(chalk.bold.white(text));
}
