/**
 * Debounce function
 *
 * @param {Function} callback The function called after debounce
 * @param {number} [time=500] The interval of the debounce in milliseconds
 */
export function debounce(callback: () => void, time = 500): () => void {
	let interval: number | null;

	return (): void => {
		if (interval) {
			clearTimeout(interval);
		}

		interval = window.setTimeout(() => {
			interval = null;

			callback();
		}, time);
	};
}
