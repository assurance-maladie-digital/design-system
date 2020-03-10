import { insertAt } from '../insertAt';

const SPACE_CHARACTER = ' ';

/**
 * Insert spaces in specific positions to display a NIR
 * (works with or without key)
 *
 * @param {string} nir The NIR to format
 * @returns {string} The formatted NIR
 */
export function formatNir(nir: string): string {
	// All positions to insert space at
	const positions = [13, 10, 7, 5, 3, 1];

	let newValue = nir;

	// For each position
	positions.forEach((position: number) => {
		// sInsert space
		newValue = insertAt(newValue, position, SPACE_CHARACTER);
	});

	return newValue.trim();
}
