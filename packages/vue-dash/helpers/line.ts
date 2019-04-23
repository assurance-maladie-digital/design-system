import chalk, { colors } from './logger';

// Trace a straight line across the terminal
export default function traceLine(): void {
	const cols = process.stdout.columns || 0;

	// For each column, display `─` in primary color
	for (let index = 0; index < cols; index++) {
		process.stdout.write(
			chalk.hex(colors.primary)('─')
		);
	}
}
