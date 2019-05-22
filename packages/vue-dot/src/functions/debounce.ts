/**
 * Debounce function
 * @param {Function} callback The function called after debounce
 * @param {Number} time The interval of the debounce in milliseconds
 */
export default function debounce(callback: (args: IArguments) => void, time: number = 500): () => void {
	let interval: NodeJS.Timeout | null;

	return () => {
		if (interval) {
			clearTimeout(interval);
		}

		// tslint:disable-next-line:only-arrow-functions
		interval = setTimeout(function() {
			interval = null;

			callback(arguments);
		}, time);
	};
}
