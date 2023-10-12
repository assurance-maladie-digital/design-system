import { insertAt } from '../insertAt';

const SPACE_CHARACTER = ' ';
const SPACE_POSITIONS = [13, 10, 7, 5, 3, 1];

/** Format a NIR (with or without key) */
export function formatNir(nir: string): string {
	let newValue = nir;

	SPACE_POSITIONS.forEach((position: number) => {
		newValue = insertAt(newValue, position, SPACE_CHARACTER);
	});

	return newValue.trim();
}
