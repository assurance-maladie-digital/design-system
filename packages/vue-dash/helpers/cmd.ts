import chalk, { log } from './chalk';

export default function cmd(text: string) {
	log(chalk.grey('$ ') + chalk.cyan(text));
}
