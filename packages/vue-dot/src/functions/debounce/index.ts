/**
 * Debounce function
 *
 * @param {Function} callback The function called after debounce
 * @param {number} [time=500] The interval of the debounce in milliseconds
 */
export function debounce(callback: () => void, time: number = 500): () => void {
	let interval: number | null;

	return () => {
		if (interval) {
			clearTimeout(interval);
		}

		// tslint:disable-next-line:only-arrow-functions
		interval = window.setTimeout(() => {
			interval = null;

			callback();
		}, time);
	};
}
