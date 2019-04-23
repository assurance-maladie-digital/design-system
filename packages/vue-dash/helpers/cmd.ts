import chalk, { log } from './chalk';

export default function cmd(text: string): void {
	log(chalk.grey('$ ') + chalk.cyan(text));
}
