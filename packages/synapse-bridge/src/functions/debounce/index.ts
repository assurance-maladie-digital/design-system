/** Debounce a callback function */
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
