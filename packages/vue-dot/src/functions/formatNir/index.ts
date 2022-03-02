import { insertAt } from '../insertAt';

const SPACE_CHARACTER = ' ';

/** Format a NIR (with or without key) */
export function formatNir(nir: string): string {
	const positions = [13, 10, 7, 5, 3, 1];

	let newValue = nir;

	positions.forEach((position: number) => {
		newValue = insertAt(newValue, position, SPACE_CHARACTER);
	});

	return newValue.trim();
}
